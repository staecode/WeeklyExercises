// Assortment of data structure practice exercises for CS300
// STACK
// written by Staci Harding for PSU CS300 Winter 21
// Instructor Fei Xie

// Stack list implemented linked list

class ListNode {
    constructor(data = 0) {
        this.data = data;
        this.next = null;
    }
}

//implemented as stack, kept class name to use same test code
// (and the stack is linked by node)
class Stack {
    constructor(head = null) {
        this.head = head;
    }

    length() {
        let node = this.head;
        let count = 0;
        while(node) {
            count++;
            node = node.next;
        }
        return count;
    }

    display() {
        let count = 0;
        let node = this.head;
        while(node) {
            console.log("Node " + count + ": " + node.data +"\n");
            node = node.next;
            count++;
        }
    }

    push(data = 0) {
        let new_node = new ListNode(data);
        if(this.head != null) {
            new_node.next = this.head;
        } 
        this.head = new_node;
    } 

    empty() {
        if(this.head == null) {
            console.log("Nothing here");
            return true;
        } else {
            false;
        }
    }

    pop() {
        if(this.head != null) {
            let saved = this.head;
            this.head = saved.next;
            return saved.data;
        } 
    }

    peek() {
        if(this.head != null) {
            return this.head.data;
        } else {
            return -999999;
        }
    }

    get_value_at(key = 0) {
        if (this.head != null) {
            let node = this.head;
            let count = 0;
            while (node && (count < key)) {
                node = node.next;
                count++;
            }
            if (node) {
                return node.data;
            } else {
                return "No value stored at index";
            }
        } else {
            return "No value stored at index";
        }
    }

    find_index_of(data = 0) {
        if (this.head != null) {
            let node = this.head;
            let count = 0;
            while (node) {
                if (node.data == data) {
                    break;
                }
                count++;
                node = node.next;
            }
            if (node) {
                return count;
            } else {
                return "Value not found in list";
            }
        } else {
            return "Value not found in list";
        }
    }

     remove_by_index(key = 0) {
        if (this.head != null) {
            let node = this.head;
            let prev_node = null;
            let count = 0;
            while (node.next && (count < key)) {
                prev_node = node;
                node = node.next;
                count++;
            }
            if (key == 0) {
                this.head = node.next;
            } else {
                prev_node.next = node.next;
            }
        }
    }

    //remove first match of data
    remove_by_value(data = 0) {
        if (this.head != null) {
            let node = this.head;
            let prev_node = null;
            while (node.next && (node.data < data)) {
                prev_node = node;
                node = node.next;
            } 
            if(node.data == data) {
                if (prev_node == null) {
                    this.head = node.next;
                } else {
                    prev_node.next = node.next;
                }
            }
        } 
    }

    reverse_in_place() {
        if (this.head != null) {
            let start_length = this.length();
            let holder = new Array(start_length);
            for(let i = 0; i < start_length; i++) {
                if(this.length() > 0) {
                    holder[i] = this.pop();
                }
            }
            if(this.empty()) {
                for(let j = 0; j < start_length; j++) {
                    this.push(holder[j]);
                }
            } 
        }
    }

    // sort_to_ascending() {

    // }
}

module.exports = Stack