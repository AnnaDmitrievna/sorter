class Sorter {
    constructor() {
        this.array = [];
        this.compareFunction = (a, b) => a - b;
    }

    add(elem) {
        this.array.push(elem);
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {
        let tempArray = [];

        indices.sort();

        for (let i = 0; i < indices.length; i++) {
            tempArray.push(this.array[indices[i]]);
        }

        tempArray.sort(this.compareFunction);

        for (let i = 0; i < indices.length; i++) {
            this.array[indices[i]] = tempArray[i];
        }
    }

    setComparator(compareFunction) {
        this.compareFunction = compareFunction;
    }
};

module.exports = Sorter;