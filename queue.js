// Assortment of data structure practice exercises for CS300
// QUEUE
// written by Staci Harding for PSU CS300 Winter 21
// Instructor Fei Xie

// Queue will create queue list implemented linked list


const LinkedList = require('./stack.js');

class Queue {
    constructor(head = null) {
        this.enQ_stack = new LinkedList();
        this.deQ_stack = new LinkedList();
    }

    enQueue(data = 0) {
        if(this.deQ_stack.empty()) {
            this.deQ_stack.push(data);
        } else {
            while(!(this.deQ_stack.empty())) {
                this.enQ_stack.push(this.deQ_stack.pop().data);
            }
            this.deQ_stack.push(data);
            while(!(this.enQ_stack.empty())) {
                this.deQ_stack.push(this.enQ_stack.pop().data);
            }
        }
    }

    display() {
        this.deQ_stack.display();
    }
}

let que = new Queue;

for (i = 0; i < 10; i++) {
    que.enQueue(Math.floor(Math.random() * 100));
}

que.display();