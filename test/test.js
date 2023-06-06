describe("MakeAnSuccessfullAttempt", function () {
  it("should make an successfull attempt", async function () {

    const originalContractAddress = "0xdC7Ae38Aef9B9D559Da26a0Ba9c72892EB6d0A1a";
    const Contract = await hre.ethers.getContractFactory("Contract");
    const contract = await Contract.deploy();
  
    const emitWinner = await contract.triggerWinningAttempt(originalContractAddress);
  
    if(emitWinner) {
      console.log("Attempt was made");
    }
  });
});