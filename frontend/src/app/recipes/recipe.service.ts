import { Recipe } from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

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
      'This is huge hamburger.',
      'https://blog.tefal.hu/webtemp/files/gallery/1/3/2690/1170_658_100__exact__large-actifry-genius-xl-2in1.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Mustard', 1),
        new Ingredient('Buns', 2),
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
