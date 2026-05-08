class QueueNode {
    val: number;
    next: QueueNode | null;
    prev: QueueNode | null;

    constructor(val: number) {
        this.val = val;
    }
}

class StudentQueue {
    front: QueueNode | null;
    back: QueueNode | null;

    insert(val: number) {
        const newNode = new QueueNode(val);
        
        if (this.back) {
            this.back.next = newNode;
        }
        
        this.back = newNode;

        if (!this.front) {
            this.front = newNode;
        }
    }

    remove() {
        if (!this.front) return  null;

        const oldNode = this.front;

        if (this.front) {
            this.front = this.front.next;
        }

        if (this.back === oldNode) {
            this.back = null;
        }

        oldNode.next = null;

        return oldNode;
    }
}
class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]) {
        const studentsQueue = new StudentQueue();

        let studentIdx = 0;
        let sandwichIdx = 0;
        let numStudentsSendBack = 0;

        while (true) {
            if (sandwichIdx >= sandwiches.length) {
                return 0;
            }

            if (studentIdx < students.length) {
                if (students[studentIdx] === sandwiches[sandwichIdx]) {
                    sandwichIdx++;
                } else {
                    studentsQueue.insert(students[studentIdx]);
                }

                studentIdx++;
                continue;
            }

            if (numStudentsSendBack >= sandwiches.length - sandwichIdx) {
                return numStudentsSendBack;
            }

            const studentAtFront = studentsQueue.remove();
            if (!studentAtFront) return 0;
            
            if (studentAtFront.val === sandwiches[sandwichIdx]) {
                sandwichIdx++;
                numStudentsSendBack = 0;
            } else {
                studentsQueue.insert(studentAtFront.val);
                numStudentsSendBack++;
            }
        }
    }
}
