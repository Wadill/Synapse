// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SynapseToken is ERC20, Ownable {
    constructor(address initialOwner) ERC20("Synapse Token", "SYNAPSE") Ownable(initialOwner) {
        _mint(msg.sender, 100_000_000 * 10**decimals()); // 100M supply, adjust as needed
    }

    // Mint rewards (called by marketplace/oracle)
    function mintReward(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}