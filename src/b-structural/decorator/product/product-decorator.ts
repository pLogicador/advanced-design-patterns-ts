import { IProductProtocol } from "./iproduct-protocol";

export class ProductDecorator implements IProductProtocol {
    constructor(protected product: IProductProtocol) {}

    getPrice(): number {
        return this.product.getPrice();
    }
    
    getName(): string {
        return this.product.getName();
    }
}
