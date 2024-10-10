import { ProductCustomizationDecorator } from "./product/product-customization-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";
import { TShirt } from "./product/t-shirt";

const tShirt = new TShirt();
const printedTShirt = new ProductStampDecorator(tShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);
console.log(tShirt.getPrice(), tShirt.getName());
console.log(printedTShirt.getPrice(), printedTShirt.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());
