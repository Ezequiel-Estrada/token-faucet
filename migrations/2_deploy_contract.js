var ERC20TokenFaucet = artifacts.require('./ERC20TokenFaucet.sol');

module.exports = function (deployer) {
  deployer.deploy(ERC20TokenFaucet);
};
