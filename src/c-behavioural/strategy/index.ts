import { DefaultDiscount } from "./shopping-cart/default-discount";
import { ECommerceShoppingCart } from "./shopping-cart/e-commerce-shopping-cart";
import { NewDiscount } from "./shopping-cart/new-discount";

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({name: 'Product01', price: 50});
shoppingCart.addProduct({name: 'Product02', price: 50});
shoppingCart.addProduct({name: 'Product03', price: 50});
console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
