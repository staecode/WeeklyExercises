// Assortment of data structure practice exercises for CS300
// written by Staci Harding for PSU CS300 Winter 21
// Instructor Fei Xie

// List Class, typical linked list implementation

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    length() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    display() {
        let node = this.head;
        let index = 0;
        while (node) {
            console.log("Node " + index + ": " + node.data + "\n");
            node = node.next;
            index++;
        }
    }

    insert(data = 0) {
        let new_node = new ListNode(data);

        let node = this.head;
        let prev_node = null;

        while (node && (node.data < data)) {
            prev_node = node;
            node = node.next;
        }
        if (prev_node == null) {
            this.head = new_node;
        } else {
            prev_node.next = new_node;
        }
        new_node.next = node;
    }

    push(data = 0) {
        let new_node = new ListNode(data);
        new_node.next = this.head;
        this.head = new_node;
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
            let starting_length = this.length();
            let node = this.head;
            while (node) {
                this.push(node.data);
                node = node.next;
            } 
            node = this.head;
            let count = 0;
            while (count != (starting_length - 1)) {
                node = node.next;
                count++;
            }
            node.next = null;

        }
    }


    // sort list, without returning new list
    // cut list at head with accessory remove_by_index(), store values in int arr
    // use accessory insert function to rebuild at same head
    // insert only traverses as far as needed to insert by value, ascending
    sort_to_ascending() {
        if (this.head != null) {
            let arr = new Array(this.length());
            let node = this.head;
            let i = 0;
            while (node) {
                arr[i++] = node.data;
                node = node.next;
                this.remove_by_index();
            }
            for (let j = 0; j < i; j++) {
                this.insert(arr[j]);
            }
        }
    }
}

module.exports = LinkedList 


