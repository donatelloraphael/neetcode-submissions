class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const middle = Math.floor((matrix.length - 1) / 2);
        return this.searchRows(matrix, target, 0, matrix.length - 1);
    }

    searchRows(matrix, target, start, end) {
        console.log("ROW:", matrix, start, end)
        if (start > end) {
            return false;
        }

        const mid = start + Math.floor((end - start) / 2);

        if (matrix[mid][0] === target || matrix[mid][matrix[mid].length - 1] === target) {
            return true;
        }
        
        if (matrix[mid][0] < target && matrix[mid][matrix[mid].length -1] > target) {
            const middle = Math.floor((matrix[mid].length - 1) / 2);
            return this.searchColumn(matrix[mid], target, 0, middle, matrix[mid].length - 1);
        }
        
        return (matrix[mid][0] < target) ?
            this.searchRows(matrix, target, mid + 1, end) :
            this.searchRows(matrix, target, start, mid - 1);
    }

    searchColumn(arr, target, start, mid, end) {
        console.log("COLUMN: ", arr, target, start, mid, end)
        if (arr[mid] === target) {
            return true;
        }
        if (end - start === 0) {
            return false;
        }
       
        if (arr[mid] > target) {
            const middle = Math.floor((start + mid) / 2);
            return this.searchColumn(arr, target, start, middle, mid);
        }
        if (arr[mid] < target) {
            const middle = Math.floor((mid + end) / 2);
            return this.searchColumn(arr, target, mid + 1, middle, end);
        }
    }
}
