class ListNode {
    next: ListNode | null;
    prev: ListNode | null;
    val: number;

    constructor(val: number) {
        this.val = val;
    }
}

class DobuleEndedQueue {
    front: ListNode | null;
    back: ListNode | null;

    add(val: number) {
        const newNode = new ListNode(val);

        if (!this.front && !this.back) {
            this.front = newNode;
            this.back = newNode;
            return;
        }

        this.back.next = newNode;
        newNode.prev = this.back;

        this.back = newNode;
    }

    remove() {
        if (!this.front) {
            return null;
        }

        if (this.back === this.front) {
            const val = this.front.val
            this.back = null;
            this.front = null;
            return val;
        }

        const oldNode = this.front;
    
        this.front = oldNode.next;
        if (this.front) {
            this.front.prev = null;
            oldNode.next = null;
        }

        return oldNode.val;
    }

    addLeft(val: number) {
        const newNode = new ListNode(val);

        if (!this.front && !this.back) {
            this.front = newNode;
            this.back = newNode;
            return;
        }

        newNode.next = this.front;
        this.front.prev = newNode;
        this.front = newNode;
    }

    removeRight() {
        if (!this.back) {
            return null;
        }

        if (this.back === this.front) {
            const val = this.front.val
            this.back = null;
            this.front = null;
            return val;
        }

        const oldNode = this.back;
        this.back = oldNode.prev;

        if (this.back) {
            this.back.next = null;
            oldNode.prev = null;
        }

        return oldNode.val;
    }
    
    peek() {
        if (!this.front) {
            return null;
        }

        return this.front.val;
    }
}

class MyStack {
    stack: DobuleEndedQueue;

    constructor() {
        this.stack = new DobuleEndedQueue();
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number) {
        this.stack.addLeft(x);
    }

    /**
     * @return {number}
     */
    pop() {
        return this.stack.remove();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.peek();
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.stack.peek() === null;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
