import { ProductDecorator } from "./product-decorator";

export class ProductCustomizationDecorator extends ProductDecorator {
    getPrice(): number {
        return this.product.getPrice() + 55;
    }

    getName(): string {
        return this.product.getName() + ' (CUSTOMIZED)';
    }
}
