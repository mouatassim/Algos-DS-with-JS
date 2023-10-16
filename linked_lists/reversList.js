const { Node, LinkedList } = require("./LinkedListClass");

function reversList(list) {
    //solution 1;
    // let node = list.head;
    // if (!node){
    //     new Error("the list is empty it cannot be reversed")
    // }
    // let revList = new LinkedList();

    // while(node){
    //     revList.addFirst(new Node(node.value))
    //     node = node.next;
    // }
    // return revList;

    // solution 2
    if (!list.head) {
        return;
    }
    '1-> <-2<-3'
    let previous = list.head;
    let first = list.head;
    let current = previous.next;

    while(current){
        let next = current.next;
        current.next = previous;
        previous = current;
        current = next
    }
    first.next = null;
    list.head = previous
    return list;
}

module.exports = { reversList };
