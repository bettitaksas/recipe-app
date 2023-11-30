import { Recipe } from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Lángos',
      'Super-tasty Hungarian dish.',
      'https://budapestflow.b-cdn.net/wp-content/uploads/2017/03/l%C3%A1ngos_street-kitchen.hu_.jpg',
      [
        new Ingredient('Flour', 1),
        new Ingredient('Oil', 1),
        new Ingredient('Sour cream', 1),
        new Ingredient('Cheese', 1),
      ]),
    new Recipe(
      'Hamburger',
      'This is a huge hamburger.',
      'https://blog.tefal.hu/webtemp/files/gallery/1/3/2690/1170_658_100__exact__large-actifry-genius-xl-2in1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Mustard', 1),
        new Ingredient('Buns', 2),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
