class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
        this.min = null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (this.min === null || val < this.min) {
            this.min = val
            this.minStack.push(val)
        } else {
            this.minStack.push(this.min)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
        this.min = this.minStack[this.minStack.length - 1] || null
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
