import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract HealthNFT is ERC721A, ChainlinkClient {
    using Chainlink for Chainlink.Request;

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    event AIInferenceRequested(uint256 tokenId, string modelId);
    event AIResultReceived(uint256 tokenId, string result);

    constructor() ERC721A("HealthNFT", "HNFT") {
        setChainlinkToken(/* LINK address */);
        oracle = /* Oracle address */;
        jobId = /* Job ID for AI adapter */;
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    function requestAIInference(uint256 tokenId, string memory modelId) public {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        req.add("modelId", modelId);
        req.add("dataHash", /* 0G hash */);
        sendChainlinkRequestTo(oracle, req, fee);
        emit AIInferenceRequested(tokenId, modelId);
    }

    function fulfill(bytes32 _requestId, string memory _result) public recordChainlinkFulfillment(_requestId) {
        // Parse _result, update NFT metadata
        emit AIResultReceived(/* tokenId */, _result);
    }
}