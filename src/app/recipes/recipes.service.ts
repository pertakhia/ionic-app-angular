import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'gebjalia',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/02/83/25/48/1000_F_283254898_QBABSXH9rQwLjdW2O82VfKiXI4CK4mlL.jpg',
      ingredients: ['Pound the mint', 'pepper and salt', 'add savory'],
    },
    {
      id: 'r2',
      title: 'sacivi',
      imageUrl:
        'https://georgianrecipes.files.wordpress.com/2014/01/satsivi_1-copy.jpg',
      ingredients: [
        'chicken',
        '700 grams of walnuts',
        '5 medium sized onions',
        '4 cloves of garlic',
      ],
    },
  ];
  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
