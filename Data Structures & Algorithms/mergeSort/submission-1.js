/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        return this.mergeSortHelper(pairs, 0, pairs.length - 1);
    }

    mergeSortHelper(pairs, start, end) {
        if ((end - start) <= 0) {
            return pairs;
        }

        const middle = Math.floor((start + end) / 2);

        this.mergeSortHelper(pairs, start, middle);
        this.mergeSortHelper(pairs, middle + 1, end);

        this.merge(pairs, start, middle, end);

        return pairs;
    }

    merge(pairs, start, middle, end) {
        const L = pairs.slice(start, middle + 1);
        const R = pairs.slice(middle + 1, end + 1);

        let i = 0;
        let j = 0;
        let s = start;

        while (i < L.length && j < R.length) {
            if (L[i].key <= R[j].key) {
                pairs[s] = L[i];
                i++;
            } else {
                pairs[s] = R[j];
                j++;
            }
            s++;
        }

        while (i < L.length) {
            pairs[s] = L[i];
            i++;
            s++; 
        }

        while (j < R.length) {
            pairs[s] = R[j];
            j++;
            s++;
        }
    }
}
