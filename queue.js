class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.left = null;
        this.right = null;
    }

    enqueue(val){
        const enqueue = new ListNode(val);
        if(this.right) {
            enqueue.next = this.left;
            this.left.previous = enqueue;
            this.left = enqueue;
        } else {
            this.left = enqueue;
            this.right = enqueue;
        }
    }

    dequeue(){
        if(!this.left) return 'queue is empty';
        if(this.left === this.right) {
            const val = this.left.val;
            this.left = null;
            this.right = null;
            return val;
        } else{
            const val = this.right.val;
            this.right.previous.next = null;
            this.right = this.right.previous;
            return val;
        } 
    }

    print(){
        let current = this.left;
        let val = '';
        while(current){
            val = val + '=>' +current.val
            current = current.next;
        }
        console.log(val);
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.print();
console.log(queue.dequeue());
queue.print();