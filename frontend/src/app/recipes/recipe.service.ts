import { Recipe } from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  /*private recipes: Recipe[] = [
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
  ];*/

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice()); //emit a copy of the updated list
  }
}
