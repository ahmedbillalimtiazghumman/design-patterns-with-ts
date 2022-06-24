var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
;
var Size;
(function (Size) {
    Size["Small"] = "small";
    Size["Medium"] = "medium";
    Size["Large"] = "large";
    Size["ExtraLarge"] = "extra large";
})(Size || (Size = {}));
var Product = /** @class */ (function () {
    function Product(name, color, size) {
        this._name = name;
        this._color = color;
        this._size = size;
    }
    Product.prototype.color = function () {
        return this._color;
    };
    Product.prototype.size = function () {
        return this._size;
    };
    return Product;
}());
var ColorSpecification = /** @class */ (function () {
    function ColorSpecification(color) {
        this._color = color;
    }
    ColorSpecification.prototype.isSatisfied = function (item) {
        return item.color() === this._color;
    };
    return ColorSpecification;
}());
var SizeSpecification = /** @class */ (function () {
    function SizeSpecification(size) {
        this._size = size;
    }
    SizeSpecification.prototype.isSatisfied = function (item) {
        return item.size() === this._size;
    };
    return SizeSpecification;
}());
var CombinedSpecification = /** @class */ (function () {
    function CombinedSpecification() {
        var specs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            specs[_i] = arguments[_i];
        }
        this._specs = new Array();
        this._specs = specs;
    }
    CombinedSpecification.prototype.isSatisfied = function (item) {
        return this._specs.every(function (spec) { return spec.isSatisfied(item); });
    };
    return CombinedSpecification;
}());
var ProductFilter = /** @class */ (function () {
    function ProductFilter() {
    }
    ProductFilter.filter = function (products, Specs) {
        return products.filter(function (p) { return Specs.isSatisfied(p); });
    };
    return ProductFilter;
}());
var apple = new Product('Apple', Color.Red, Size.Small);
var tree = new Product('Tree', Color.Green, Size.Large);
var house = new Product('House', Color.Blue, Size.ExtraLarge);
var products = [apple, tree, house];
console.log(ProductFilter.filter(products, new ColorSpecification(Color.Blue)));
console.log(ProductFilter.filter(products, new SizeSpecification(Size.ExtraLarge)));
console.log(ProductFilter.filter(products, new CombinedSpecification(new ColorSpecification(Color.Blue), new SizeSpecification(Size.ExtraLarge))));
