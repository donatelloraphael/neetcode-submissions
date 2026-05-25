/** Pair class to store key-value pairs */
class Pairz {
  /**
   * @param {number} key The key to be stored in the pair
   * @param {string} value The value to be stored in the pair
   */
  key: number;
  value: string;

  constructor(key: number, value: string) {
      this.key = key;
      this.value = value;
  }
}
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs: Pairz[]): Pairz[] {
        return this.divide(pairs, 0, pairs.length - 1);
    }

    divide(arr: Pairz[], left: number, right: number) {
        if (left < right) {
            const middle = Math.floor((left + right) / 2);

            this.divide(arr, left, middle);
            this.divide(arr, middle+1, right);

            this.merge(arr, left, middle, right);
        }

        return arr;
    }

    merge(arr: Pairz[], left: number, middle: number, right: number) {
        const length1 = middle - left + 1;
        const length2 = right - middle;

        const L = new Array(length1);
        const R = new Array(length2);

        for (let i = 0; i < length1; i++) {
            L[i] = arr[left + i];
        }
        for (let j = 0; j < length2; j++) {
            R[j] = arr[middle + 1 + j];
        }

        let i = 0;
        let j = 0;
        let k = left;

        while  (i < length1 && j < length2) {
            if (L[i].key <= R[j].key) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < length1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        while (j < length2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}
