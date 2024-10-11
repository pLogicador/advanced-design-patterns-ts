import { deliveryContext } from "./delivery/delivery-context";
import { DeliveryFactory } from "./delivery/delivery-factory";

const factory = new DeliveryFactory();
deliveryContext(factory, 'Pedro', '15C', 'Av. Brazil', 'SP');
deliveryContext(factory, 'Robert', '15C', 'Av. Brazil', 'SP');
deliveryContext(factory, 'Maria', '520B', 'Av. Brazil', 'SP');
deliveryContext(factory, 'Elem', '2', 'Rua A', 'MG');

console.log();
console.log(factory.getLocations());
