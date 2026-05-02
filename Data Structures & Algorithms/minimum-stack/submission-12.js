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

        if (!this.minStack.length) {
            this.minStack.push(val);
            return;
        }

        const currMin = this.minStack.at(-1);

        this.minStack.push(currMin < val ? currMin: val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        console.log(this.stack, this.minStack)
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
