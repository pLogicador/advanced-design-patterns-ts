import { BicycleFactory } from "../factories/bicycle-factory";
import { CarFactory } from "../factories/car-factory";
import { randomNumbers } from "../utils/random-numbers";
import { Vehicle } from "../vehicle/vehicle";

export function randomCarAlgorithm(): Vehicle {
    const carFactory = new CarFactory();
    const bicycleFactory = new BicycleFactory();
    const car1 = carFactory.getVehicle('beetle');
    const car2 = carFactory.getVehicle('celtic');
    const bike = bicycleFactory.getVehicle('bike');
    const cars = [car1, car2, bike];
    return cars[randomNumbers(cars.length)];

}