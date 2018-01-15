let Stack = artifacts.require('Stack');

contract('Stack', (accounts) => {
    it('should deploy', () => {
        return Stack.deployed().then((instance) => {
            return instance
        })
    })
    it('returns a void top on empty stack', () => {
        return Stack.deployed().then((instance) => {
            return instance.top.call().then((top) => {
                return top
            })
        })
    })
})