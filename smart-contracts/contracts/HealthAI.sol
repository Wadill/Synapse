// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HealthAI {
    enum Role { None, Patient, Doctor, Admin, Researcher, Insurer }
    enum Language { EN, ES, FR, ZH, HI }

    struct User {
        Role role;
        bool verified;
        uint256 joinedAt;
        Language lang;
    }

    struct Record {
        string dataHash;     // 0G Storage root hash
        uint256 timestamp;
        address owner;
        bool emergencyOpen;
        uint256 emergencyExpiry;
    }

    struct INFT {
        uint256 id;
        string metadataHash;
        address owner;
        uint256 price;
        bool forSale;
    }

    struct Appointment {
        address doctor;
        uint256 time;
        bool confirmed;
        bool attended;
        uint256 paidAmount;
    }

    struct Trial {
        uint256 id;
        string name;
        string eligibilityHash;
        uint256 reward;
    }

    // Mappings
    mapping(address => User) public users;
    mapping(bytes32 => Record) public records;
    mapping(uint256 => INFT) public infts;
    mapping(address => Appointment[]) public appointments;
    mapping(address => bytes32[]) public myRecords;
    mapping(uint256 => Trial) public trials;
    mapping(address => uint256[]) public consentedTrials;

    // Counters
    uint256 public inftCount;
    uint256 public trialCount;

    // Events
    event Registered(address indexed user, Role role);
    event RecordStored(bytes32 indexed hash, address owner);
    event INFTMinted(uint256 id, string metadataHash, address owner);
    event AppointmentBooked(address patient, address doctor, uint256 time);
    event EmergencyAccessGranted(bytes32 recordHash, uint256 expiry);
    event DataSold(bytes32 recordHash, uint256 price, address buyer);
    event FraudDetected(address claimer, bytes32 recordHash);
    event Translated(bytes32 recordHash, Language from, Language to);

    // Modifiers
    modifier onlyRole(Role _role) {
        require(users[msg.sender].role == _role, "Unauthorized");
        _;
    }

    modifier onlyVerified() {
        require(users[msg.sender].verified, "Not verified");
        _;
    }

    // === CORE FUNCTIONS ===

    function register(Role _role, Language _lang) external {
        require(users[msg.sender].role == Role.None, "Already registered");
        users[msg.sender] = User(_role, false, block.timestamp, _lang);
        emit Registered(msg.sender, _role);
    }

    function verifyUser(address _user) external onlyRole(Role.Admin) {
        users[_user].verified = true;
    }

    function storeRecord(string calldata _dataHash) external onlyVerified {
        bytes32 hash = keccak256(abi.encodePacked(_dataHash, block.timestamp, msg.sender));
        records[hash] = Record(_dataHash, block.timestamp, msg.sender, false, 0);
        myRecords[msg.sender].push(hash);
        emit RecordStored(hash, msg.sender);
    }

    function mintINFT(string calldata _metadataHash, uint256 _price) external onlyVerified returns (uint256) {
        inftCount++;
        infts[inftCount] = INFT(inftCount, _metadataHash, msg.sender, _price, true);
        emit INFTMinted(inftCount, _metadataHash, msg.sender);
        return inftCount;
    }

    function bookAppointment(address _doctor, uint256 _time) external payable onlyVerified {
        require(msg.value >= 0.01 ether, "Pay 0.01 ZAI");
        appointments[msg.sender].push(Appointment(_doctor, _time, true, false, msg.value));
        emit AppointmentBooked(msg.sender, _doctor, _time);
    }

    function confirmAttendance(address _patient, uint256 _index) external onlyRole(Role.Doctor) {
        require(appointments[_patient][_index].doctor == msg.sender, "Not your patient");
        appointments[_patient][_index].attended = true;
    }

    function emergencyAccess(bytes32 _recordHash, uint256 _duration) external onlyRole(Role.Doctor) {
        require(records[_recordHash].owner != address(0), "Record not found");
        records[_recordHash].emergencyOpen = true;
        records[_recordHash].emergencyExpiry = block.timestamp + _duration;
        emit EmergencyAccessGranted(_recordHash, block.timestamp + _duration);
    }

    function buyData(uint256 _inftId) external payable onlyVerified {
        INFT memory nft = infts[_inftId];
        require(nft.forSale, "Not for sale");
        require(msg.value >= nft.price, "Insufficient payment");
        payable(nft.owner).transfer(msg.value);
        infts[_inftId].forSale = false;
        emit DataSold(keccak256(abi.encodePacked(nft.metadataHash)), msg.value, msg.sender);
    }

    function flagFraud(bytes32 _recordHash) external onlyRole(Role.Insurer) {
        emit FraudDetected(msg.sender, _recordHash);
    }

    function addTrial(string calldata _name, string calldata _eligibilityHash, uint256 _reward) external onlyRole(Role.Researcher) {
        trialCount++;
        trials[trialCount] = Trial(trialCount, _name, _eligibilityHash, _reward);
    }

    function consentToTrial(uint256 _trialId) external onlyVerified {
        consentedTrials[msg.sender].push(_trialId);
    }

    function translateRecord(bytes32 _recordHash, Language _to) external onlyVerified {
        emit Translated(_recordHash, users[msg.sender].lang, _to);
        users[msg.sender].lang = _to;
    }

    // View Functions
    function getMyRecords() external view returns (bytes32[] memory) {
        return myRecords[msg.sender];
    }

    function isEmergencyOpen(bytes32 _hash) external view returns (bool) {
        return records[_hash].emergencyOpen && block.timestamp < records[_hash].emergencyExpiry;
    }
}