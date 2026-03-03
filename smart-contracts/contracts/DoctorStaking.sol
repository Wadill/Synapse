// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DoctorStaking is Ownable {
    IERC20 public synapseToken;
    uint256 public minStakeForPremium = 5000 * 10**18; // e.g., 5k tokens for premium

    mapping(address => uint256) public stakes;
    mapping(address => bool) public isPremiumDoctor;

    event Staked(address doctor, uint256 amount);
    event Unstaked(address doctor, uint256 amount);

    constructor(address _synapseToken, address initialOwner) Ownable(initialOwner) {
        synapseToken = IERC20(_synapseToken);
    }

    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be >0");
        synapseToken.transferFrom(msg.sender, address(this), amount);
        stakes[msg.sender] += amount;

        if (stakes[msg.sender] >= minStakeForPremium) {
            isPremiumDoctor[msg.sender] = true;
        }

        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external {
        require(stakes[msg.sender] >= amount, "Insufficient stake");
        stakes[msg.sender] -= amount;
        synapseToken.transfer(msg.sender, amount);

        if (stakes[msg.sender] < minStakeForPremium) {
            isPremiumDoctor[msg.sender] = false;
        }

        emit Unstaked(msg.sender, amount);
    }

    // Marketplace can query this view function for visibility boost
    function isPremium(address doctor) external view returns (bool) {
        return isPremiumDoctor[doctor];
    }
}