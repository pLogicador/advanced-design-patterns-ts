import { AlcoholicDrink } from "./alcoholic-drink";
import { Cigarette } from "./cigarette";
import { Food } from "./food";
import { TaxVisitorProtocol } from "./tax-visitor-protocol";

export class UsTaxVisitor implements TaxVisitorProtocol {
    calculateTaxesForFood(food: Food): number {
        return food.getPrice() + food.getPrice() * 0.15;
    }

    calculateTaxesForCigarette(cigarette: Cigarette): number {
        return cigarette.getPrice() + cigarette.getPrice() * 2.0;
    }

    calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
        return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 1.0;
    }
}
