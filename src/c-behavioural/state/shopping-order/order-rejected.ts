import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order-state";

export class OrderRejected  implements ShoppingOrderState {
    private name = 'OrderRejected';

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name;
    }

    approvePayment(): void {
        console.log(
            'I cannot approve the payment because the order was rejected.'
        );
    }

    rejectPayment(): void {
        console.log(
            'I cannot reject the payment as the order is already rejected.'
        );
    }
    
    waitPayment(): void {
        console.log('I cant move to pending because the order was rejected.');
    }

    shipOrder(): void {
        console.log('I cannot send an order with payment rejected.');
    }
}
