class Iterator {
    constructor(list) {
        this.list = list;
        this.i =  0;
    }

    next() {
        return this.list.get(this.i++);
    }

    hasNext() {
        return  this.i < list.getLength();
    }
}

class Iteratorable {
    iterator() {
        return new Iterator(this);
    }
}


class ArrayList extends Iteratorable {
    constructor() {
        super();
        this.array = [];
    }

    add(element) {
        this.array.push(element);
    }

    remove(i) {
        this.array.splice(i, 1);
    }

    get(i) {
        return this.array[i];
    }

    getLength() {
        return this.array.length;
    }
}


const list = new ArrayList();
list.add(1);
list.add(2);
list.add(3);
list.add(5);

const selfIterator = list.iterator();
while(selfIterator.hasNext()) {
    console.log(selfIterator.next());
}