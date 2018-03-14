let LL = artifacts.require('LinkedList');

contract('LinkedList', (accounts) => {
    it('should deploy', () => {
        return LL.deployed().then((instance) => {
            return instance
        })
    })
    it('returns the initial list head', () => {
        return LL.deployed().then((instance) => {
            return instance.head.call()
                .then((head) => {
                    return head
                })
        })
    })
    it('returns an entry from an empty list', () => {
        return LL.deployed().then((instance) => {
            return instance.getEntry(5)
                .then((entryData) => {
                    return (
                        assert.equal(entryData[0], 0) &&
                        assert.equal(entryData[1].toString(), '0') &&
                        assert.equal(entryData[2], '')
                    )
                })
        })
    })
    it('successfully appends to a list', () => {
        let initialHead
        let finalHead
        return LL.deployed().then((instance) => {
            return instance.head.call()
                .then((firstHead) => {
                    initialHead = firstHead
                    return instance.addEntry(5, 'cool-name')
                })
                .then(() => {
                    return instance.head.call()
                })
                .then((newHead) => {
                    finalHead = newHead
                    return assert.notEqual(finalHead, initialHead)
                })
        })
    })
    it('successfully removes from end of a list', () => {
        return LL.deployed().then((instance) => {
            let initialHead
            let secondHead
            let finalHead
            return instance.head.call()
                .then((firstHead) => {
                    initialHead = firstHead
                    return instance.addEntry(5, 'cool-name')
                })
                .then(() => {
                    return instance.head.call()
                })
                .then((newHead) => {
                    secondHead = newHead
                    return instance.removeEntry(newHead)
                })
                .then(() => {
                    return instance.head.call()
                })
                .then((lastHead) => {
                    finalHead = lastHead
                    return (
                        assert.equal(initialHead, finalHead) &&
                        asset.notEqual(initialHead, secondHead)
                    )
                })
        })
    })
    it('correctly alters list length', () => {
        return LL.deployed().then((instance) => {
            let initialLength
            let appendedLength
            let removedLength
            return instance.length.call()
                .then((firstLength) => {
                    initialLength = firstLength
                    return instance.addEntry(1, 'second-node')
                })
                .then(() => {
                    return instance.length.call()
                })
                .then((appendLength) => {
                    appendedLength = appendLength
                    return instance.head.call()
                })
                .then((head) => {
                    return instance.removeEntry(head)
                })
                .then(() => {
                    return instance.length.call()
                })
                .then((removeLength) => {
                    removedLength = removeLength
                    return (
                        assert.equal(initialLength.toString(), removedLength.toString()) &&
                        assert.notEqual(initialLength.toString(), appendedLength.toString())
                    )
                })
        })
    })
    it('successfully removes from middle of a list', () => {
        return LL.deployed().then((instance) => {
            return instance.addEntry(1, 'first-entry').then(() => {
                return instance.head.call().then((middleHead) => {
                    return instance.getEntry(middleHead).then((middleEntry) => {
                        let middleNumber = middleEntry[1].toString()
                        return instance.addEntry(2, 'second-entry').then(() => {
                            return instance.removeEntry(middleHead).then((removedTx) => {
                                let removedNumber = removedTx.logs[0].args.number.toString()
                                return instance.length.call().then((length) => {
                                    return (
                                        assert.equal(length.toString(), '2')
                                        && assert.equal(middleNumber, removedNumber)
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