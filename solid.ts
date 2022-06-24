/*
*                                    ****SOLID PRINCIPLE****
* A class must have a single primary responsibility. It should only have one reason to change that
* reason being somehow related to change its responsibility. In other words it is a bad idea to add
* more than one responsibility to a class.
*
* */


class Journal {
    private readonly entries = <any>{};
    private count: number = 0;

    constructor() {
    }

    addEntries(text: string) {
        const incrementedCount = ++this.count;
        this.entries[incrementedCount] = `${incrementedCount}: ${text}`;
    }

    removeEntry(index: number) {
        delete this.entries[index];
    }
}


const journal = new Journal();

journal.addEntries('this is shit');
journal.addEntries('this is shit1');
journal.addEntries('this is shit2');
journal.addEntries('this is shit3');

console.log(journal);
