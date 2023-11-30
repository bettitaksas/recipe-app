import { Recipe } from "./recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test.', 'https://budapestflow.b-cdn.net/wp-content/uploads/2017/03/l%C3%A1ngos_street-kitchen.hu_.jpg'),
    new Recipe('Another Test Recipe', 'This is just a test.', 'https://budapestflow.b-cdn.net/wp-content/uploads/2017/03/l%C3%A1ngos_street-kitchen.hu_.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
