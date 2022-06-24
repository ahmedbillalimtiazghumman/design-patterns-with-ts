/*
*                                    ****SOLID PRINCIPLE****
* A class must have a single primary responsibility. It should only have one reason to change that
* reason being somehow related to change its responsibility. In other words it is a bad idea to add
* more than one responsibility to a class.
*
* */
var Journal = /** @class */ (function () {
    function Journal() {
        this.entries = {};
        this.count = 0;
    }
    Journal.prototype.addEntries = function (text) {
        var incrementedCount = ++this.count;
        this.entries[incrementedCount] = "".concat(incrementedCount, ": ").concat(text);
    };
    Journal.prototype.removeEntry = function (index) {
        delete this.entries[index];
    };
    return Journal;
}());
var journal = new Journal();
journal.addEntries('this is shit');
journal.addEntries('this is shit1');
journal.addEntries('this is shit2');
journal.addEntries('this is shit3');
console.log(journal);
