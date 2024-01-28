// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./Manager.sol";
import "./libs/NFTDescriptor.sol";

contract Village is ERC721 {
    Manager public manager;

    struct VillageData {
        address head;
        string name;
        uint256[] permitPrices;
        uint256[] duration;
        string dataURI;
        string color0;
        string color1;
        string color2;
        string color3;
        uint256 pollinationScore;
        uint256 villagerCount;
    }

    mapping(uint256 => VillageData) public villages;

    constructor(address _manager) ERC721("Zuvillage", "ZVL") {
        manager = Manager(_manager);
    }

    function mint(VillageData memory village) external {
        manager.onlyVillageHead(msg.sender);

        _safeMint(msg.sender, totalSupply());

        villages[totalSupply()] = village;
    }

    function getVillages(
        uint256[] memory tokenIds
    ) external view returns (VillageData[] memory) {
        VillageData[] memory villageData = new VillageData[](tokenIds.length);

        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 tokenId = tokenIds[i];
            VillageData memory village = villages[tokenId];

            villageData[i] = VillageData({
                head: village.head,
                name: village.name,
                permitPrices: village.permitPrices,
                duration: village.duration,
                dataURI: village.dataURI,
                color0: village.color0,
                color1: village.color1,
                color2: village.color2,
                color3: village.color3,
                pollinationScore: getPollinationScore(tokenId),
                villagerCount: getVillagerCount(tokenId)
            });
        }

        return villageData;
    }

    function getPollinationScore(
        uint256 tokenId
    ) public pure returns (uint256) {
        return 0;
    }

    function getVillagerCount(uint256 tokenIds) public pure returns (uint256) {
        return 0;
    }

    function tokenURIs(
        uint256[] memory tokenIds
    ) public view returns (string[] memory) {
        string[] memory _villages = new string[](tokenIds.length);

        for (uint256 i = 0; i < tokenIds.length; i++) {
            uint256 tokenId = tokenIds[i];

            _villages[i] = tokenURI(tokenId);
        }

        return _villages;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        VillageData memory village = villages[tokenId];

        return
            NFTDescriptor.constructTokenURI(
                NFTDescriptor.ConstructTokenURIParams({
                    tokenId: tokenId,
                    head: village.head,
                    name: village.name,
                    permitPrices: village.permitPrices,
                    duration: village.duration,
                    dataURI: village.dataURI,
                    color0: village.color0,
                    color1: village.color1,
                    color2: village.color2,
                    color3: village.color3,
                    pollinationScore: getPollinationScore(tokenId),
                    villagerCount: getVillagerCount(tokenId)
                })
            );
    }
}
