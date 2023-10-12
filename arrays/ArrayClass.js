class ArrayM {
    count = 0;
    constructor(length) {
        this.array = new Array(length);
    }

    get getLength() {
        return this.count;
    }

    arrayValue() {
        if (!this.count) return [];
        let tempArray = [];
        for (let i = 0; i < this.count; i++) {
        tempArray.push(this.array[i]);
        }
        return tempArray;
    }
    print() {
        console.log(this.arrayValue());
    }

    insert(value) {
        this.array[this.count++] = value;
    }

    indexOf(value) {
        for (let i = 0; i < this.count; i++) {
        if (value === this.array[i]) return i;
        }
        return -1;
    }

    insertAt(value, index) {
        if (index > this.count) {
        this.insert(value);
        return;
        }
        for (let i = this.count - 1; i >= index; i--) {
        this.array[i + 1] = this.array[i];
        }
        this.array[index] = value;
        this.count++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.count) throw Error("invalid index");
        for (let i = index; i < this.count; i++) {
        this.array[i] = this.array[i + 1];
        }
        this.count--;
    }
    remove(value) {
        if (this.indexOf(value) !== -1) {
        for (let i = this.indexOf(value); i < this.count; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.count--;
        return value;
        }
        return -1;
    }
    max() {
        let highest = this.array[0];
        for (let i = 1; i < this.count; i++) {
        if (highest < this.array[i]) highest = this.array[i];
        }
        return highest;
    }
    reverse() {
        let refersed = [];
        for (let i = this.count - 1; i >= 0; i--) {
        refersed.push(this.array[i]);
        }

        for (let i = 0; i < this.count; i++) {
        this.array[i] = refersed[i];
        }
    }
    intersect(arr) {
        let intersArr = [];
        for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < this.array.length; j++) {
            if (arr[i] === this.array[j]) {
            intersArr.push(arr[i]);
            }
        }
        }
        return intersArr
    }
}

module.exports = ArrayM;
