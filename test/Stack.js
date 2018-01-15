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
    it('successfully pushes to top of stack', () => {
        return Stack.deployed().then((instance) => {
            return instance.top.call().then((initialTop) => {
                return instance.push(1, 'first-node').then(() => {
                    return instance.top.call().then((secondTop) => {
                        return instance.push(2, 'second-node').then(() => {
                            return instance.top.call().then((thirdTop) => {
                                return (
                                    assert.notEqual(initialTop.toString(), secondTop.toString()) &&
                                    assert.notEqual(initialTop.toString(), thirdTop.toString()) &&
                                    assert.notEqual(secondTop.toString(), thirdTop.toString())
                                )
                            })
                        })
                    })
                })
            })
        })
    })
    it('successfully pops from the top of the stack', () => {
        return Stack.deployed().then((instance) => {
            return instance.top.call().then((initialTop) => {
                return instance.push(1, 'first-node').then(() => {
                    return instance.top.call().then((secondTop) => {
                        return instance.push(2, 'second-node').then(() => {
                            return instance.top.call().then((thirdTop) => {
                                return instance.pop().then(() => {
                                    return instance.top.call().then((popTop) => {
                                        return (
                                            assert.equal(popTop.toString(), secondTop.toString()) &&
                                            assert.notEqual(popTop.toString(), thirdTop.toString()) &&
                                            assert.notEqual(secondTop.toString(), thirdTop.toString())
                                        )
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})