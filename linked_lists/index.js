const { kthNodeFromTheEnd } = require("./kthFromTheEnd");
const { LinkedList, Node } = require("./LinkedListClass");
const { reversList } = require("./reversList");

let list = new LinkedList();
list.addLast(new Node(5));
list.addFirst(new Node(7));
list.addFirst(new Node(12));
// list.addFirst(new Node(27));
// list.addFirst(new Node(28));
// list.addFirst(new Node(51));


list.print();
// reversList(list);
// list.print();

const k = kthNodeFromTheEnd(list,4)
console.log(k);





