import { Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';

export const routes: Routes = [
  {path:'',component:CategoriesComponent,title: 'Recipes'},
  {path:'details/:id' , component:MealDetailsComponent , title: 'Details'},
];
