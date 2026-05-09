class MinStack {
    numbers: number[];
    minNumbers: number[];

    constructor() {
        this.numbers = [];
        this.minNumbers = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number) {
        this.numbers.push(val);
        let currMin = this.getMin() ?? val;

        currMin = currMin > val ? val : currMin;

        this.minNumbers.push(currMin);
    }

    /**
     * @return {void}
     */
    pop() {
        this.numbers.pop();
        this.minNumbers.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.numbers.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minNumbers.at(-1);
    }
}
