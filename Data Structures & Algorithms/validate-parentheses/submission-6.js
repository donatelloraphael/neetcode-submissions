class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const braces = {'(' : ')', '{' : '}', '[' : ']'}
        const closers = [')', '}', ']']

        if (s.length < 2) {
            return false
        }

        const stack = [s[0]]

        for (let i = 1; i < s.length; i++) {
            if (closers.includes(s[i])) {
                const leftBrace = stack.pop()
                if (braces[leftBrace] !== s[i]) {
                    return false
                }
            } else {
                stack.push(s[i])
            }
        }

        return stack.length ? false : true

    }
}
