class Node {
  constructor(val, next) {
    (this.val = val), (this.next = next);
  }
}
class LL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //insert
  insertFirst(val) {
    this.head = new Node(val, this.head);
    if (this.tail == null) {
      this.tail = this.head;
    }
    this.size++;
  }
  insertLast(val) {
    let temp = new Node(val, null);
    if (this.tail == null) {
      this.insertFirst(val);
    }
    this.tail.next = temp;
    this.tail = temp;
    this.size++;
  }
  inBetween(val, after) {
    let temp = this.head;
    for (let i = 0; i < this.size; i++) {
      if (temp.val == after) {
        temp.next = new Node(val, temp.next);
        this.size++;
        break;
      }
      temp = temp.next;
    }
  }
  deleteFirst() {
    if (this.head == null) {
      console.log("make tail null");
      this.tail = null;
      return;
    }
    let temp = this.head;
    this.head = temp.next;
    this.size--;
  }
  deleteLast() {
    if (this.size == 1) {
      console.log("Zero call");
      this.deleteFirst();
      return;
    }
    let previousNode = this.getNodeIndex(this.size - 2);
    previousNode.next = null;
    this.tail = previousNode;
    this.size--;
  }
  getNodeIndex(index) {
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  delete(val) {
    let temp = this.head;
    for (let i = 0; i < this.size; i++) {
      if (temp.val == val) {
      }
    }
  }
  display() {
    let temp = this.head;
    let final = "";
    while (temp) {
      final += temp.val + "->";
      temp = temp.next;
    }
    console.log("sss", final + "End");
  }
  removeDuplicate() {
    let temp = this.head;
    while (temp.next != null) {
      if (temp.val == temp.next.val) {
        temp.next = temp.next.next;
        this.size--;
      } else {
        temp = temp.next;
      }
    }
  }
  mergeTwoList(list1, list2) {
    let f = list1.head;
    let s = list2.head;
    let ans = new LL();
    while (f != null && s != null) {
      if (f.val > s.val) {
        ans.insertFirst(f.val);
        f = f.next;
      } else {
        ans.insertFirst(s.val);
        s = s.next;
      }
    }
    while (f != null) {
      ans.insertFirst(f.val);
      f = f.next;
    }
    while (s != null) {
      ans.insertFirst(s.val);
      s = s.next;
    }
    return ans;
  }
}
let sample = new LL();
let sample2 = new LL();
sample.insertFirst(1);
sample.insertFirst(3);
sample.insertFirst(5);

sample2.insertFirst(1);
sample2.insertFirst(2);
sample2.insertFirst(9);
sample2.insertFirst(14);

let ans = new LL();
let sampleans = ans.mergeTwoList(sample, sample2);
sampleans.display();
// console.log("sss", sampleans);
