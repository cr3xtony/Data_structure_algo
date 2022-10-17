class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = new ListNode(-1);
        this.tail =new ListNode(-1);
        this.head.next = this.tail;
        this.tail.previous = this.head;
    }

    insertFront(val){
        const newNode = new ListNode(val);
        newNode.next = this.head.next;
        newNode.previous = this.head;
        this.head.next.previous = newNode;
        this.head.next = newNode;
    }

    insertEnd(val){
        const newNode = new ListNode(val);
        newNode.next = this.tail;
        newNode.previous = this.tail.previous;
        this.tail.previous.next = newNode;
        this.tail.previous = newNode;
        
    }

    print(){
        let curr = this.head.next;
        let s = "";
        while (curr != this.tail) {
            s+= curr.val + "->";     
            curr = curr.next;
        }
        console.log(s);
    }
}

const doubly = new DoublyLinkedList();
doubly.insertFront(1);
doubly.insertFront(0);
doubly.insertEnd(2);
doubly.insertEnd(3);
console.log(doubly.print())
