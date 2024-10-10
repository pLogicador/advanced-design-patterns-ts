import { IProductProtocol } from "./iproduct-protocol";

export class TShirt implements IProductProtocol {
    private name = 'T-shirt';
    private price = 59.9;

    getPrice(): number {
        return this.price;
    }
    
    getName(): string {
        return this.name;
    }
}
