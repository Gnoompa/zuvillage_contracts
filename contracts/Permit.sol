// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Manager.sol";
import "./Village.sol";

contract Permit is ERC721 {
    Manager public manager;
    Village public village;

    mapping(uint256 => uint256) public permitToVillage;
    mapping(uint256 => uint256) public permitCounter;

    constructor(
        address _manager,
        address _village
    ) ERC721("Zuvillage Permit", "ZVP") {
        manager = Manager(_manager);
        village = Village(_village);
    }

    function mint(uint256 villageId, uint256 permitTier) external payable {
        uint256[] memory villageIds = new uint256[](1);

        villageIds[0] = villageId;

        address villageHead = village.getVillages(villageIds)[0].head;

        require(villageHead != address(0), "No such village");
        require(
            msg.value ==
                village.getVillages(villageIds)[0].permitPrices[permitTier],
            "Invalid value sent"
        );

        payable(villageHead).transfer((msg.value / 100) * 95);
        payable(manager.dao()).transfer((msg.value / 100) * 5);

        permitToVillage[totalSupply()] = villageId;
        permitCounter[villageId] += 1;

        _safeMint(msg.sender, totalSupply());
    }
}
