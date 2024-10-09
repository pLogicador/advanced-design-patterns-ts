// Component
export abstract class ProductComponent {
    abstract getPrice(): number;
    
    add(product: ProductComponent): void {}
    remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
    constructor(public name: string, public price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}

// Composite
export class ProductComposite extends ProductComponent {
    private children: ProductComponent[] = [];

    add(...products: ProductComponent[]): void {
        products.forEach((product) => this.children.push(product));
    }

    remove(product: ProductComponent): void {
        const productIndex = this.children.indexOf(product);
        if (productIndex !== -1) this.children.splice(productIndex, 1);
    }

    getPrice(): number {
        return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
    }
}

// Client
const pen = new ProductLeaf('Caneta', 10);
const tShirt = new ProductLeaf('Camiseta', 40);
const smartphone = new ProductLeaf('Smartphone', 4_000);
const whiteTankTop = new ProductLeaf('Regata branca', 30);
const productBox = new ProductComposite();
productBox.add(pen, tShirt, whiteTankTop, smartphone);

const tablet = new ProductLeaf('Tablet', 3_000);
const kindle = new ProductLeaf('Kindle', 1_000);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
