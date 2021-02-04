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

    level_display_R(node, level) {
        if(node) {
            if(level == 1) {
                console.log(node.data + ' ');
            } else {
                this.level_display_R(node.left, level - 1);
                this.level_display_R(node.right, level - 1);
            }
        } 
    }

    level_display() {
        for(let i = 1; i <= this.height(); i++) {
            console.log('At Height ' + (i) + ':');
            this.level_display_R(this.head, i);
        }
    }

    display() {
        this.display_R(this.head);
    }

    find_lca_R(node, n1, n2) {
        if(node) {
            if((node.data > n1) && (node.data > n2)) {
                return this.find_lca_R(node.left, n1, n2);
            } else if((node.data < n1) && (node.data < n2)) {
                return this.find_lca_R(node.right, n1, n2);
            } else {
                return node.data;
            }
        }
    }

    find_lca(num1, num2) {
        let result = this.find_lca_R(this.head, num1, num2); {
            if(result) {
                return result;
            } else {
                return( num1 < num2 ? num1 : num2);
            }
        }
    }

    // remove_by_value_R(prev, node, num) {
    //     if(node) {
    //         if(node.data == num) {
    //             if(node == this.head) {
    //                 if(node.right == null) {
    //                     if(node.left != null) {
    //                         this.head = node.left;
    //                     }
    //                 } else if(node.left == null) {
    //                     if(node.right != null) {
    //                         this.head = node.right;
    //                     }
    //                 } else {
    //                     this.head = null;
    //                 }
    //             } else {
    //                 if((node.left == null) && (node.right == null)) {
    //                     prev.next = null;
    //                 } else if(node.left == null) {
    //                     prev.next = node.right;
    //                 } else if(node.right == null) {
    //                     prev.next = node.left;
    //                 } else {
    //                     let pred = node;
    //                     let next = node.right;
    //                     while(next.left != null) {
    //                         pred = next;
    //                         next = next.left;
    //                     } 

    //                 }
    //             }
    //         } else {
    //             this.remove_by_value_R(node, node.left);
    //             this.remove_by_value_R(node, node.right);
    //         }
    //     }
    // }

    // remove_by_value(num) {
    //     let prev = this.head;
    //     this.remove_by_value_R(prev, this.head, num);
    // }

}

module.exports = Tree