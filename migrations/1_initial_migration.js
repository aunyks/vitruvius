let Migrations = artifacts.require('./Migrations.sol')
let LinkedList = artifacts.require('./LinkedList.sol')

module.exports = function(deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(LinkedList)
};
