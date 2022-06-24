/*
* A Software object should be open for extension but closed for modification
*
* */



enum Color {
    Red = 'red',
    Green = 'Green',
    Blue = 'Blue'
};

enum Size {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
    ExtraLarge = 'extra large'
}


class Product {
    private _name: string;
    private readonly _color: Color;
    private readonly _size: Size;

    constructor(name: string, color: Color, size: Size) {
        this._name = name;
        this._color = color;
        this._size = size;
    }

    color(): Color {
        return this._color;
    }

    size(): Size {
        return this._size;
    }
}

class ColorSpecification {
    _color: Color;

    constructor(color: Color) {
        this._color = color;
    }

    isSatisfied(item: Product): boolean {
        return item.color() === this._color;
    }
}


class SizeSpecification {
    _size: Size;

    constructor(size: Size) {
        this._size = size;
    }

    isSatisfied(item: Product): boolean {
        return item.size() === this._size;
    }
}

class CombinedSpecification {
    _specs = new Array<any>();

    constructor(...specs) {
        this._specs = specs;
    }

    isSatisfied(item: Product) {
        return this._specs.every(spec => spec.isSatisfied(item));
    }

}

abstract class ProductFilter {
    static filter(products: Product[], Specs: ColorSpecification | SizeSpecification | CombinedSpecification): Product[] {
        return products.filter(p => Specs.isSatisfied(p));
    }
}


const apple = new Product('Apple', Color.Red, Size.Small);
const tree = new Product('Tree', Color.Green, Size.Large);
const house = new Product('House', Color.Blue, Size.ExtraLarge);

const products: Product[] = [apple, tree, house];

console.log(ProductFilter.filter(products, new ColorSpecification(Color.Blue)));
console.log(ProductFilter.filter(products, new SizeSpecification(Size.ExtraLarge)));
console.log(ProductFilter.filter(products,
    new CombinedSpecification(new ColorSpecification(Color.Blue), new SizeSpecification(Size.ExtraLarge))));


