import { SlideDrawerComponent } from './../slide-drawer/slide-drawer.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipesPageRoutingModule } from './recipes-routing.module';

import { RecipesPage } from './recipes.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RecipesPageRoutingModule],
  declarations: [RecipesPage, RecipeItemComponent, SlideDrawerComponent],
})
export class RecipesPageModule {}
