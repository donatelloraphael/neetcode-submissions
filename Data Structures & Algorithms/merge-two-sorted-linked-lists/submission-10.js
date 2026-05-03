const util = require('util');
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1 && !list2) {
            return null;
        }

        if (!list1) return list2;
        if (!list2) return list1;

        let currNode;
        let list1Node;
        let list2Node;

        if (list1.val < list2.val) {
            currNode = list1;
            list1Node = list1.next;
            list2Node = list2;
        } else {
            currNode = list2;
            list2Node = list2.next;
            list1Node = list1;
        }

        let head = currNode;

        while (list1Node && list2Node) {
            console.log("currNode", currNode.val, "list1Node", list1Node.val, "list2Node", list2Node.val)

            if (list1Node.val < list2Node.val) {
                currNode.next = list1Node;
                list1Node = list1Node.next;
            } else {
                currNode.next = list2Node;
                list2Node = list2Node.next;
            }

            currNode = currNode.next;
        }

        while (list1Node) {
            currNode.next = list1Node;
            list1Node = list1Node.next;
            currNode = currNode.next;
        }

        while (list2Node) {
            currNode.next = list2Node;
            list2Node = list2Node.next;
            currNode = currNode.next;
        }

        return head;
    }

}
