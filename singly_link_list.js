class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    insertEnd(val){
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
    }

    remove(index){
        let i = 0;
        let current = this.head;
        while(i < index && current !== null){
            current = current.next;
            i++;
        }
        console.log('removed ' + current.val)
        if(current !== null) current.next = current.next.next;
        
    }

    print(){
        let current = this.head.next;
        while(current !== null){
            console.log(current.val);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.insertEnd(10);
linkedList.insertEnd(11);
linkedList.insertEnd(12);
linkedList.insertEnd(13);
linkedList.insertEnd(14);
linkedList.print();
linkedList.remove(3);
linkedList.print();