let LL = artifacts.require('LinkedList');

contract('LinkedList', (accounts) => {
    it('should deploy', () => {
        return LL.deployed().then((instance) => {
            return instance
        })
    })
    it('returns the initial list head', () => {
        return LL.deployed().then((instance) => {
            return instance.head.call().then((head) => {
                return head
            })
        })
    })
    it('returns an entry from an empty list', () => {
        return LL.deployed().then((instance) => {
            return instance.getEntry(5).then((entryData) => {
                return entryData[0] === 0 && entryData[1].toString() === '0' && entryData[2] === ''
            })
        })
    })
    it('successfully appends to a list', () => {
        return LL.deployed().then((instance) => {
            return instance.head.call().then((initialHead) => {
                return instance.addEntry(5, 'cool-name').then((success) => {
                    return instance.head.call().then((newHead) => {
                        return success && (newHead !== initialHead)
                    })
                })
            })
        })
    })
    it('successfully removes from end of a list', () => {
        return LL.deployed().then((instance) => {
            return instance.head.call().then((initialHead) => {
                return instance.addEntry(5, 'cool-name').then(() => {
                    return instance.head.call().then((newHead) => {
                        return instance.removeEntry(newHead).then((oldEntry) => {
                            return oldEntry[1] === 5 && oldEntry[2] === 'cool-name'
                        })
                    })
                })
            })
        })
    })
    it('correctly alters list length', () => {
        return LL.deployed().then((instance) => {
            let initialLength = 0
            return instance.addEntry(1, 'second-node').then(() => {
                return instance.length.call().then((appendLength) => {
                    return instance.head.call().then((head) => {
                        return instance.removeEntry(head).then(() => {
                            return instance.length.call().then((removeLength) => {
                                return initialLength === removeLength && initialLength !== appendLength
                            })
                        })
                    })
                })
            })
        })
    })
    it('successfully removes from middle of a list', () => {
        return LL.deployed().then((instance) => {
            return assert.equal(0, 1)
        })
    })
})