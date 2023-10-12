class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
    #length;
    constructor(head = null) {
        this.head = head;
        this.#length = 0;
    }

    addLast(newNode) {
        let node = this.head;
        if (node == null) {
        this.head = newNode;
        } else {
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
        }
        this.#length++;
    }

    addFirst(newNode) {
        if (!this.head) {
        this.head = newNode;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.#length++;
    }

    deleteFirst() {
        if (!this.head || !this.head.next) {
        this.head = null;
        return;
        }
        let node = this.head;
        this.head = node.next;
        node = null;
        this.#length--;
    }

    deleteLast() {
        if (!this.head || !this.head.next) {
        this.head = null;
        return;
        }
        let node = this.head;
        let p = node;
        while (node.next) {
        p = node;
        node = node.next;
        }
        p.next = null;
        this.#length--;
    }

    containes(n) {
        return this.indexOf(n) !== -1;
    }

    size() {
        return this.#length;
    }

    indexOf(n) {
        let i = 0;
        let node = this.head;
        while (node != null) {
        if (node.value === n) {
            return i;
        }
        node = node.next;
        i++;
        }
        return -1;
    }

    display() {
        let node = this.head;
        let res = "";
        if (!node) {
        return "the list is empty";
        }
        while (node) {
        res += node.value + " --> ";
        node = node.next;
        }
        res += "null";
        return res;
    }

    print() {
        console.log(this.display());
    }
}

module.exports = { LinkedList, Node };
