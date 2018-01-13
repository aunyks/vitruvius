var LL = artifacts.require('LinkedList');

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
    it('successfully appends to Linked List', () => {
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
})