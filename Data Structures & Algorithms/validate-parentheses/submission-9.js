class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (const char of s) {
            switch(char) {
                case '(':
                case '{':
                case '[':
                  stack.push(char);
                  break;
                case ')':

                  if (stack[stack.length -1] === '(') {
                    stack.pop();
                  } else {
                    return false;
                  }
                  break;
                case '}':

                  if (stack[stack.length - 1] === '{') {
                    stack.pop();
                  } else {
                    return false;
                  }
                  break;
                case ']':

                  if (stack[stack.length - 1] === '[') {
                    stack.pop();
                  } else {
                    return false;
                  }
            }
        }

        return stack.length === 0;
    }
}
