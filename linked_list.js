class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor(head){
        this.head = head;
    }
    add(value){
        const newNode = new Node(value);
        let current = this.head;
        while(current.next != null){
            current = current.next;
        }
        current.next = newNode;
    }
    remove(value) {
        let current = this.head;
        let previous = null;
        while (current !== null) {
            if(current.value === value){
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
}

const head = new Node(1500);
const manobBondon = new LinkedList(head);
manobBondon.add(27)
manobBondon.add(13)
manobBondon.add(59)
manobBondon.add(68)
manobBondon.add(43)
console.log(JSON.stringify(manobBondon))
