class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);

        const currMin = this.minStack.at(-1);
        if (currMin === undefined || val <= currMin) {
            this.minStack.push(val);
        }
        // this.minStack.push(currMin < val ? currMin: val);
    }

    /**
     * @return {void}
     */
    pop() {
        const val = this.stack.pop();
        if (this.minStack.at(-1) === val) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log("getMin", this.stack, this.minStack)
        return this.minStack.at(-1);
    }
}
