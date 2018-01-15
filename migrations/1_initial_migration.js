let Migrations = artifacts.require('./Migrations.sol')
let LinkedList = artifacts.require('./LinkedList.sol')
let Stack      = artifacts.require('./Stack.sol')

module.exports = function(deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(LinkedList)
  deployer.deploy(Stack)
};
