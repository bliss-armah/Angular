import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This simply a test',
      'https://www.dianekochilas.com/wp-content/uploads/2022/10/Greek-recipe-kokoras-krasatos-coq-au-vin-rooster-cooked-in-wine.jpg',
      [
        new Ingredient('Meta', 1),
        new Ingredient('French Fries', 20),
        new Ingredient('Meta', 3),
      ]
    ),
    new Recipe(
      'Another Test Recipe',
      'This simply a test',
      'https://www.dianekochilas.com/wp-content/uploads/2022/10/Greek-recipe-kokoras-krasatos-coq-au-vin-rooster-cooked-in-wine.jpg',
      [
        new Ingredient('Meta', 1),
        new Ingredient('Potato Fries', 20),
        new Ingredient('Meta', 3),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());

  }
}
