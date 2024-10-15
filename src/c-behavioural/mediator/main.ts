import { Buyer } from "./buyer";
import { Mediator } from "./mediator";
import { Seller } from "./seller";

const mediator = new Mediator();
const seller1 = new Seller();
const seller2 = new Seller();

seller1.addProduct({ id: '1', name: 'T-shirt', price: 49.9 });
seller1.addProduct({ id: '2', name: 'Shoes', price: 149.9 });
seller2.addProduct({ id: '3', name: 'Pencil', price: 9.9 });
seller2.addProduct({ id: '4', name: 'car', price: 10000.9 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
