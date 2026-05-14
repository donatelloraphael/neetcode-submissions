/**
 * Pair class to store key-value pairs
 */
class Pairx {
    /**
     * @param {number} key The key to be stored in the pair
     * @param {string} value The value to be stored in the pair
     */
    key
    value
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pairx[]): Pairx[][] {
        const result: Pairx[][] = [];

        for (let i = 0; i < pairs.length; i++) {
            result.push([...pairs]);
            let j = i;
            while (j >= 0 && pairs[j+1]?.key < pairs[j]?.key) {
                const tmp = pairs[j];
                pairs[j] = pairs[j+1];
                pairs[j+1] = tmp;
                j--;
            }
        }

        return result;
    }
}
