class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const record = [];

        for (let i = 0; i < operations.length; i++) {
            switch (operations[i]) {
                case '+':
                   record.push(Number(record[record.length - 1]) + Number(record[record.length-2]));
                   break;
                case 'D':
                   record.push(Number(record[record.length-1]) * 2);
                   break;
                case 'C':
                   record.pop();
                   break;
                default:
                   record.push(Number(operations[i]));
                   break;
            }
        }

        return record.reduce((sum, val) => sum+val, 0)
    }
}
