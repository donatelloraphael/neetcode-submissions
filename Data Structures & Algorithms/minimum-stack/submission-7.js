class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (!this.minStack.length || val < this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val)
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack.length - 1
        if (top < 0) {
            return null
        }
        return this.stack[top]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
