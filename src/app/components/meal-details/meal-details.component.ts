import { Component } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../../interfaces/meal';
import { IngredientsAndMeasure } from '../../interfaces/ingredients-and-measure';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent {

  meal!: Meal;
  subscription: any;
  mealIngredients!:any;
  constructor(private mealService: MealsService, private route: ActivatedRoute) { }

  getMealDetails() {
    const mealId = this.route.snapshot.params['id']
    this.subscription = this.mealService.getMealDetails(mealId).subscribe({
      next: (meal) => {
        this.meal = meal.meals[0];
        this.extractIngredientsAndMeasures(this.meal);


      }
    })
  }




  extractIngredientsAndMeasures(meal:any) {
    const temp = []
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];


      // Check if both ingredient and measure are available
      if (ingredient && ingredient.trim() !== "" && measure && measure.trim() !== "") {
        temp.push({ ingredient, measure });
      }

    }

    this.mealIngredients = temp
   

  }
  ngOnInit(): void {
    this.getMealDetails();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}











