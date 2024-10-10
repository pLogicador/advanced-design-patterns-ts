import { MainDishBuilder } from "../../a-creational/builder/classes/main-dish-builder";
import { VeganDishBuilder } from "../../a-creational/builder/classes/vegan-dish-builder";

export class BuilderFacade {
    // This is the facade for the folder src/a-creational/builder/index.ts
    private mainDishBuilder = new MainDishBuilder();
    private veganDishBuilder = new VeganDishBuilder();

    makeMeal1(): void {
        this.mainDishBuilder.makeMeal().makeDessert().makeBeverage();
        console.log(this.mainDishBuilder.getMeal());
        console.log(this.mainDishBuilder.getPrice());
    }

    makeMeal2(): void { 
        this.mainDishBuilder.reset();
        const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
        console.log(meal2);
        console.log(meal2.getPrice());
    }

    makeMeal3(): void { 
        const meal3 = this.veganDishBuilder.makeMeal().getMeal();
        console.log(meal3);
        console.log(meal3.getPrice());
    }
}
