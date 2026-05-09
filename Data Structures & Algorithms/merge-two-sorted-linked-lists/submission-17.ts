/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class LNode {
    val: number;
    next: LNode | null;

    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
 }

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: LNode | null, list2: LNode | null) {
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }

        let head: LNode;

        if (list2.val > list1.val) {
            head = list1;
            list1 = list1.next;
        } else {
            head = list2;
            list2 = list2.next;
        }

        let currNode = head;

        while(list1 && list2) {
            if (list2.val > list1.val) {
                currNode.next = list1;
                list1 = list1.next;
            } else {
                currNode.next = list2;
                list2 = list2.next;
            }

            currNode = currNode.next
        }

        while (list1) {
            currNode.next = list1;
            list1 = list1.next;
            currNode = currNode.next;
        }

        while (list2) {
            currNode.next = list2;
            list2 = list2.next;
            currNode = currNode.next;
        }

        return head;
    }
}
