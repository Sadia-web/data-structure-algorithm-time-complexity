class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();
phoneBook.add('robert', '01717030303');
phoneBook.add('tom', '01717050505');
phoneBook.add('hank', '01717070707');
console.log(phoneBook.dictionary);
const robert = phoneBook.get("robert")
console.log(robert);