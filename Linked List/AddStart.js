class Node {
  constructor(NodeData) {
    this.data = NodeData;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    let cur = new Node(head);
    this.head = cur;
  }
}

let list = new LinkedList(5);

let arr = new Array(5).fill(3);
let add = 3;

console.log(arr);
