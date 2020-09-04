const { ether, BN } = require("@openzeppelin/test-helpers");

let config = {};

config.timer = {
  startTime: 1599795840,
  hardCapTimer: 172800,
  softCap: ether("1000"),
};

config.redeemer = {
  redeemBP: 400,
  redeemInterval: 3600,
  bonusRangeStart: [
    ether("0"),
    ether("1000"),
    ether("2000"),
    ether("3000")
  ],
  bonusRangeBP: [1000, 500, 250, 0],
};

config.presale = {
  maxBuyPerAddress: ether("50"),
  uniswapEthBP: 6000,
  lidEthBP: 500,
  referralBP: 250,
  hardcap: ether("3400"),
  token: "0x5befbb272290dd5b8521d4a938f6c4757742c430",
  uniswapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
  lidFund: "0xb63c4F8eCBd1ab926Ed9Cb90c936dffC0eb02cE2",
  access: "0xfD8e59814D601219bddd53879ADa1Ff75fD316e2",
  marketingFund: "0xFc347D455Cf7de0b1eC32A35CCbF941F613d53d9",
  projectFund: "0xE58818e67E9d42FB6C74E46619547200bC700661",
  teamFund: "0x8426d0C462B1A83EF47c2ee64aEa1CE03A4A70A9",
  tokenPoolsBP: {
    marketing: 500,
    team: 2900,
    lidFee: 100,
    project: 2100,
    liquidity: 1400,
    presale: 3000
  }
};

config.timelock = {
  releaseInterval: 2592000,
  releaseBP: 10000
}

module.exports = config;
