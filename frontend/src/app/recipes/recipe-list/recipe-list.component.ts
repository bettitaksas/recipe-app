import {Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test.', 'https://budapestflow.b-cdn.net/wp-content/uploads/2017/03/l%C3%A1ngos_street-kitchen.hu_.jpg'),
    new Recipe('Another Test Recipe', 'This is just a test.', 'https://budapestflow.b-cdn.net/wp-content/uploads/2017/03/l%C3%A1ngos_street-kitchen.hu_.jpg')
  ];

  constructor() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
