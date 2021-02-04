// Assortment of data structure practice exercises for CS300
// written by Staci Harding for PSU CS300 Winter 21
// Instructor Fei Xie

// Array Class, array storage linked list implementation

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class ArrayList {
    constructor(head = null, size) {
        this.head = head;
        this.max_size = size;
        this.current_length = 0;
        this.arr = new Array(size);
        this.head = this.arr[0];
    }

    size() {
        return this.max_size;
    }

    length() {
        return this.current_length;
    }

    insert(data = 0) {
        if (this.current_length >= this.max_size) {
            console.log("Cannot add any more elements to array without overwrite.");
            console.log("To add more items, please first remove.");
            return;
        } else if (this.current_length == 0) {
            let new_node = new ListNode(data);
            this.arr[0] = new_node;
            this.head = this.arr[0];
            this.current_length++;
        } else {
            let i = 0;
            while ((i < this.current_length) && (this.arr[i].data < data)) {
                i++;
            }

            let new_node = new ListNode(data);

            if (i == this.current_length) {
                this.arr[i] = new_node;
                this.arr[i - 1].next = this.arr[i];
            } else {
                let j = this.current_length;
                for (; j > i; j--) {
                    this.arr[j] = this.arr[j - 1];
                    this.arr[j].next = this.arr[j + 1];
                }
                this.arr[i] = new_node;
                this.arr[i].next = this.arr[i + 1];
                if (i == 0) {
                    this.head = this.arr[i];
                } else {
                    this.arr[i - 1].next = this.arr[i];
                }
            }
            this.current_length++;
        }
    }

    display() {
        let i = 0;
        for (; i < (this.current_length); i++) {
            console.log("Node " + i + ": " + this.arr[i].data +"\n");
        }
    }

    display_RR(node, num) {
        if (node) {
            console.log("Node " + num + ": " + node.data + "\n");
            this.display_RR(node.next, ++num);
        }
    }

    display_R() {
        let node = this.head;
        let num = 0;
        this.display_RR(node, num);
    }

    push(data = 0) {
        let j = this.current_length;
        for (; j > 0; j--) {
            this.arr[j] = this.arr[j - 1];
            this.arr[j].next = this.arr[j + 1];
        }
        this.arr[0] = new ListNode(data);
        this.arr[0].next = this.arr[1];
        this.head = this.arr[0];
        this.current_length++;
    }

    get_value_at(key = 0) {
        let i = 0;
        for (; i < this.current_length; i++) {
            if (i == key) {
                return this.arr[i].data;
            }
        }
        return "No value stored at index";
    }

    find_index_of(data = 0) {
        let i = 0;
        for (; i < this.current_length; i++) {
            if (this.arr[i].data == data) {
                return i;
            }
        }
        return "Value not found in list";
    }

    remove_by_index(key = 0) {
        let i = 0;
        while ((i < this.current_length) && (i != key)) {
            i++;
        }
        if ((i == key) && (i < this.current_length)) {
            let prev_node = null;
            if (i != 0) {
                prev_node = this.arr[i - 1];
            }
            for (; i < (this.current_length - 1); i++) {
                this.arr[i] = this.arr[i + 1];
                if (prev_node != null) {
                    prev_node.next = this.arr[i];
                } else {
                    this.head = this.arr[0];
                }
                prev_node = this.arr[i];
            }
            this.arr[this.current_length - 1] = null;
            this.current_length--;
            if (this.current_length > 1) {
                this.arr[this.current_length - 1].next = null;
            }
        }
    }

    remove_by_value(data = 0) {
        let i = 0;
        while ((i < this.current_length) && (this.arr[i].data != data)) {
            i++;
        }
        if ((this.arr[i].data == data) && (i < this.current_length)) {
            let prev_node = null;
            if (i != 0) {
                prev_node = this.arr[i - 1];
            }
            for (; i < (this.current_length - 1); i++) {
                this.arr[i] = this.arr[i + 1];
                if (prev_node != null) {
                    prev_node.next = this.arr[i];
                } else {
                    this.head = this.arr[0];
                }
                prev_node = this.arr[i];
            }
            this.arr[this.current_length - 1] = null;
            this.current_length--;
            if (this.current_length > 1) {
                this.arr[this.current_length - 1].next = null;
            }
        } 
    }

    reverse_in_place() {
        let i = 0;
        let start_length = this.current_length;
        let arr = new Array(start_length);
        for (; i < start_length; i++) {
            arr[i] = this.arr[i].data;
        }
        let j = 0;
        for (; j < start_length; j++) {
            this.push(arr[j]);
        }
        let k = 0;
        for (; k < start_length; k++) {
            this.remove_by_index(start_length);
        }
    }

    sort_to_ascending() {
        let start_length = this.current_length;
        let arr = new Array(start_length);
        let i = 0;
        for (; i < start_length; i++) {
            arr[i] = this.arr[i].data;
        }
        let j = 0;
        for (; j < start_length; j++) {
            this.remove_by_index();
        }
        let k = 0;
        for (; k < start_length; k++) {
            this.insert(arr[k]);
        }
    }

}

module.exports = ArrayList