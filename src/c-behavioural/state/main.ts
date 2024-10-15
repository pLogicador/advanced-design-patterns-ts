import { ShoppingOrder } from "./shopping-order/shopping-order";

const order = new ShoppingOrder(); // Pending
order.approvePayment(); // Approved
order.waitPayment(); // Pending
order.shipOrder();
order.rejectPayment(); // From here on, the status does not change anymore.
order.approvePayment(); 
order.waitPayment(); 
order.approvePayment(); 
order.shipOrder();
