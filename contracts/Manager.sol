// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

import "./IManager.sol";

contract Manager is IManager {
    address public dao;
    mapping(address => uint256) public villageHeads;

    constructor(address _dao) {
        dao = _dao;
    }

    function onlyDao() public view override {
        require(msg.sender == dao, "only dao");
    }

    function onlyVillageHead(address villageHead) public view override {
        require(villageHeads[villageHead] == 1, "only active village head");
    }

    function setDao(address _dao) external override {
        onlyDao();

        require(_dao != address(0));

        dao = _dao;
    }

    function setVillageHead(
        address villageHead,
        uint256 status
    ) external override {
        onlyDao();

        villageHeads[villageHead] = status;

        emit SetVillageHead(villageHead, status);
    }
}
