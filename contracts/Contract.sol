// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface OriginalContract {
    function attempt() external;
}

contract Contract {
    function triggerWinningAttempt(address originalContractAddress) external {
        OriginalContract(originalContractAddress).attempt();
    }
}