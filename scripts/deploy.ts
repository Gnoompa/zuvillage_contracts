import { ethers } from "hardhat";
import { Address } from "viem";

async function main() {
  const Manager = await ethers.getContractFactory("Manager");
  const NFTDescriptor = await ethers.getContractFactory("NFTDescriptor");

  const descriptor = await NFTDescriptor.deploy();

  console.log(`Descriptor - ${await descriptor.getAddress()}`);

  const Village = await ethers.getContractFactory("Village", {
    libraries: {
      NFTDescriptor: await descriptor.getAddress(),
    },
  });

  const manager = await Manager.deploy(
    "0x27ff262f0383E31F654ea00E78a043075f00A1A1" as Address
  );

  console.log(`Manager - ${await manager.getAddress()}`);

  const village = await Village.deploy(await manager.getAddress());

  console.log(`Vilalge - ${await village.getAddress()}`);

  const tx = await manager.setVillageHead(
    "0x27ff262f0383E31F654ea00E78a043075f00A1A1" as Address,
    1
  );

  await tx.wait();

  await village.mint({
    head: "0x27ff262f0383E31F654ea00E78a043075f00A1A1",
    name: "Mui Ne",
    permitPrices: [1, 2],
    duration: [1706070926, 1706270926],
    dataURI: "",
    color0: "FF5733",
    color1: "86FF33",
    color2: "33FFF3",
    color3: "7DFF33",
    pollinationScore: 0,
    villagerCount: 0,
  });

  console.log(`Minted village`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
