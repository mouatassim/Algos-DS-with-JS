const { LinkedList, Node } = require("./LinkedListClass");

const list = new LinkedList();
list.addFirst(new Node(5));
list.addFirst(new Node(7));
list.addFirst(new Node(12));
list.addLast(new Node(23));
list.addFirst(new Node(27));
list.deleteFirst()
list.deleteLast()

list.print();



console.log(list.containes(89));
console.log(list.size());
