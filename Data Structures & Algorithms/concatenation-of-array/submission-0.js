class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
       const ans = new Array(...nums, ...nums);

       return ans;

    }
}
