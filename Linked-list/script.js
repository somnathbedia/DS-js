class Node{
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
    }

    insertTail(data){
        const node = new Node(data);
        if (this.head == null) {
            this.head = node;
          } else {
             this.tail = this.head;
            while (this.tail.next) {
                console.log("Iam next of tail ",this.tail.next);
              this.tail = this.tail.next;
              console.log("I am tail",this.tail);
            }
            this.tail.next = node;
          }
        
    }


     printList = () => {
        let current = this.head;
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
    }


    addAllValues = () => {
        if(this.head === null){
            return 0;
        }
        let current = this.head;
        let sum = 0;
        while(current !== null){
            sum+=current.data;
            current = current.next;
        }
        return sum;
    }

    
}


const list = new LinkedList();
list.insertTail(1);
list.insertTail(1);
list.insertTail(1);
list.insertTail(1);
list.insertTail(1);
list.printList();
console.log(list.addAllValues());

// const value1 = new Node(15);
// const value2 = new Node(19);
// const value3 = new Node(5);
// const value4 = new Node(20);

// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4)


// value1.next = value2;
// value2.next = value3;
// value2.prev= value1;
// value3.next = value4;
// value3.prev = value2;
// value4.prev = value3;


// console.log(value1);
// console.log(value2);
// console.log(value3);
// console.log(value4)


const printList = (head) => {
    let current = head;
    while(current !== null){
        console.log(current.data);
        current = current.next;
    }
}

// get list values
const linkedListValues = (head) => {
    if(head == null){
        return;
    }
    let values = [];
    let current = head;
    while(current !== null){
        values.push(current.data);
        current = current.next;
    }

    return values;
}

// const listValues = linkedListValues(value1);
// console.log(listValues);


// Add all the node values
const addAllValues = (head) => {
    if(head === null){
        return 0;
    }
    let current = head;
    let sum = 0;
    while(current !== null){
        sum+=current.data;
        current = current.next;
    }
    return sum;
}


// const sum = addAllValues(value1);
// console.log(sum);


//print list in reverse order
const reverse = (tail) =>{
    let current = tail;
    while(current !== null){
        console.log(current.data);
        current = current.prev;
    }
}

// reverse(value4);


//return true if target value available

const search = (head,target) =>{
    let current = head;
    while(current !== null){
        if(current.data == target){
            return true;
        }

        current = current.next;
    }
}


// console.log(search(value1,20));


//Get node value

const getNodeValue = (head,index) =>{
    if(head == null){
        return null;
    }
    if(index == 0) return head.data;

    let current = head;
    let count = 0;

    while(current !== null){
        if(count == index) return current.data;

        count++;
        current = current.next;
    }
    
}


// console.log(getNodeValue(value1,2));
