/**
 * Definition for singly-linked list.
 */
class LNode {
    val: number;
    next: LNode;

    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: LNode | null) {
        if (!head?.next) {
            return head;
        }

        let newHead = head;
        if (head.next) {
            newHead = this.reverseList(head.next);
            head.next.next = head;
        }
        head.next = null;
        
        return newHead;
    }
}
