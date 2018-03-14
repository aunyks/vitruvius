let Stack = artifacts.require('Stack');

contract('Stack', (accounts) => {
    it('should deploy', () => {
        return Stack.deployed().then((instance) => {
            return instance
        })
    })
    it('returns a void top on empty stack', () => {
        return Stack.deployed().then((instance) => {
            return instance.top.call()
        })
        .then((top) => {
            return top
        })
    })
    it('successfully pushes to top of stack', () => {
        let initialTop
        let secondTop
        let finalTop
        return Stack.deployed().then((instance) => {
            return instance.top.call()
                .then((firstTop) => {
                    initialTop = firstTop
                    return instance.push(1, 'first-node')
                })
                .then(() => {
                    return instance.top.call()
                })
                .then((nextTop) => {
                    secondTop = nextTop
                    return instance.push(2, 'second-node')
                })
                .then(() => {
                    return instance.top.call()
                })
                .then((thirdTop) => {
                    finalTop = thirdTop
                    return (
                        assert.notEqual(initialTop.toString(), secondTop.toString()) &&
                        assert.notEqual(initialTop.toString(), finalTop.toString()) &&
                        assert.notEqual(secondTop.toString(), finalTop.toString())
                    )
                })
        })
    })
    it('successfully pops from the top of the stack', () => {
        let initialTop
        let secondTop
        let finalTop
        let poppedTop
        return Stack.deployed().then((instance) => {
            return instance.top.call()
                .then((firstTop) => {
                    initialTop = firstTop
                    return instance.push(1, 'first-node')
                })
                .then(() => {
                    return instance.top.call()
                })
                .then((nextTop) => {
                    secondTop = nextTop
                    return instance.push(2, 'second-node')
                })
                .then(() => {
                    return instance.top.call()
                })
                .then((thirdTop) => {
                    finalTop = thirdTop
                    return instance.pop()
                })
                .then(() => {
                    return instance.top.call()
                })
                .then((popTop) => {
                    poppedTop = popTop
                    return (
                        assert.equal(poppedTop.toString(), secondTop.toString()) &&
                        assert.notEqual(poppedTop.toString(), finalTop.toString()) &&
                        assert.notEqual(secondTop.toString(), finalTop.toString())
                    )
                })
        })
    })
})