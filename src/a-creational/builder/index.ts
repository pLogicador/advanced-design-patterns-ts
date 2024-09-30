import { MainDishBuilder } from "./classes/main-dish-builder";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert().makeBeverage();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);
console.log(meal2.getPrice());

const veganDishBuilder = new VeganDishBuilder();
const meal3 = veganDishBuilder.makeMeal().getMeal();
console.log(meal3);
console.log(meal3.getPrice());
