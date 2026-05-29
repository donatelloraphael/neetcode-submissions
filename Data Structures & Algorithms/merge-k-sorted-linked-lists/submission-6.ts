/**
 * Definition for singly-linked list.
 */
 class ListNodex {
    val: number;
    next: ListNodex | null;

    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
 }

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNodex[]): ListNodex {
        const nodes: ListNodex[] = [];
        let currNode: ListNodex | null = null;

        for (let i = 0; i < lists.length; i++) {
            currNode = lists[i];

            while (currNode) {
                nodes.push(currNode);
                currNode = currNode.next;
            } 
        }

        nodes.sort((a, b) => a.val - b.val);
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].next = nodes[i+1] ?? null;
        }

        return nodes[0] ?? null;
    }
}
