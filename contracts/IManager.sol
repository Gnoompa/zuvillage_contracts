// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

interface IManager {
    event SetVillageHead(address indexed headman, uint256 status);

    function onlyDao() external;

    function onlyVillageHead(address villageHead) external;

    function setDao(address _dao) external;

    function setVillageHead(address villageHead, uint256 status) external;
}
