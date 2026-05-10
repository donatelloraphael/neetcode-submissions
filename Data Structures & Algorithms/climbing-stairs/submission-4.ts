class Solution {
    cache: Map<number, number>;

    constructor() {
        this.cache = new Map<number, number>();
    }
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n === 0) {
            return 1;
        }

        if (n < 0) {
            return 0;
        }

        const cached = this.cache.get(n);

        if (cached) {
            return cached;
        }

        const res = this.climbStairs(n - 1) + this.climbStairs(n - 2);

        this.cache.set(n, res);

        return res;
    }
}
