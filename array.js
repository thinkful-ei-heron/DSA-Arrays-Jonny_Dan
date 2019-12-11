const Memory = require("./memory.js");
let Mem = new Memory()
class Array {
     constructor() {
         this.length = 0;
         this._capacity = 0;
         this.ptr = Mem.allocate(this.length);
     }
    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }
        Mem.set(this.ptr + this.length, value);
        this.length++;
    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = Mem.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        Mem.copy(this.ptr, oldPtr, this.length);
        Mem.free(oldPtr);
        this._capacity = size;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        return Mem.get(this.ptr + index);
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        Mem.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        Mem.set(this.ptr + index, value);
        this.length++;
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = Mem.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        Mem.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }
}

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    console.log(arr.get(0));
    arr.remove(2);
    arr.remove(1);
    arr.remove(0);
    arr.push('tauhida')
    console.log(arr.get(0))
    console.log(arr);
}
//main();


