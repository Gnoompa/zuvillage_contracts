// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./Permit.sol";
import "./Manager.sol";
import "./Village.sol";

contract POP is ERC20, ReentrancyGuard {
    uint256 public mintRatePerDay = 1 ether;

    Permit permit;
    Village village;
    Manager manager;

    mapping(address => uint256) pollinationScore;
    mapping(uint256 => mapping(address => uint256)) claimsByPermit;

    constructor(
        address _permit,
        address _manager,
        address _village
    ) ERC20("ProofOfPollinationToken", "POP") ReentrancyGuard() {
        permit = Permit(_permit);
        manager = Manager(_manager);
        village = Village(_village);
    }

    function claim(
        uint256 villageId,
        uint256 permitId,
        uint256 amount
    ) external nonReentrant {
        onlyExistingPermit(villageId, permitId);

        require(permit.ownerOf(permitId) == msg.sender, "Not permit owner");
        require(getClaimable(villageId, permitId) >= amount, "Invalid amount");

        claimsByPermit[permitId][msg.sender] += amount;

        _mint(msg.sender, amount);
    }

    function getClaimable(
        uint256 villageId,
        uint256 permitId
    ) public view returns (uint256) {
        uint256[] memory villageIds = new uint256[](1);

        villageIds[0] = villageId;

        if (village.getVillages(villageIds)[0].duration[0] > block.timestamp) {
            return
                (mintRatePerDay *
                    (village.getVillages(villageIds)[0].duration[1] -
                        village.getVillages(villageIds)[0].duration[0])) /
                1 days -
                claimsByPermit[permitId][msg.sender];
        } else {
            return 0;
        }
    }

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) public virtual override returns (bool) {
        _burn(sender, ((amount * 15) / 100));

        super.transferFrom(sender, manager.dao(), (amount * 15) / 100);

        pollinationScore[sender] += amount;
        pollinationScore[recipient] += amount;

        return super.transferFrom(sender, recipient, (amount * 70) / 100);
    }

    function onlyExistingPermit(
        uint256 villageId,
        uint256 permitId
    ) internal view {
        require(permit.permitToVillage(permitId) == villageId, "Wrong permit");
    }
}
