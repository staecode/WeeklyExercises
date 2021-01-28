// Assortment of data structure practice exercises for CS300
// written by Staci Harding for PSU CS300 Winter 21
// Instructor Fei Xie

// Binary Seach Tree

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(head = null) {
        this.head = head;
        if(head != null) {
               this.current_length = this.length();
        } else {
            this.current_length = 0;
        }
    }

    length_R(node) {
        let count = 0;
        if(node) {
            count = this.length_R(node.left) + this.length_R(node.right);
            return 1 + count;
        } else {
            return 0;
        }
    }

    length() {
        return this.length_R(this.head);
    }

    insert_R(node, data) {
        if(node == this.head) {
            if(node == null) {
                let new_head = new TreeNode(data);
                this.head  = new_head;
            } else {
                if(data < node.data) {
                    if(node.left != null) {
                        this.insert_R(node.left, data);
                    } else {
                        let new_node = new TreeNode(data);
                        node.left = new_node;
                    }
                } else {
                    if(node.right != null) {
                        this.insert_R(node.right, data);
                    }
                    else {
                        let new_node = new TreeNode(data);
                        node.right = new_node;
                    }
                }
            }
        } else {
            if(node) {
                if(data < node.data) {
                    if(node.left != null) {
                        this.insert_R(node.left, data);
                    } else {
                        let new_node = new TreeNode(data);
                        node.left = new_node;
                    }
                } else {
                    if(node.right != null) {
                        this.insert_R(node.right, data);
                    }
                    else {
                        let new_node = new TreeNode(data);
                        node.right = new_node;
                    }
                }
            }
        }
    }

    insert(data) {
        this.insert_R(this.head, data);
    }

    height_R(node) {
        if(node) {
            let left = 0;
            let right = 0;
            if(node.left != null)  {
                left = this.height_R(node.left);
            }
            if(node.right != null)  {
                right = this.height_R(node.right);
            }
            return 1 + (left > right ? left : right);
        }
    }

    height() {
        return this.height_R(this.head);
    }

    display_R(node) {
        if(node) {
            if(node.left != null) {
                this.display_R(node.left);
            }
            console.log("Node: " + node.data);
            if(node.right != null) {
                this.display_R(node.right);
            }
        }
    }

    display() {
        this.display_R(this.head);
    }

}

module.exports = Tree