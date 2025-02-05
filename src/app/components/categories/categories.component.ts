import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meal } from '../../interfaces/meal';
import { MealsService } from '../../services/meals.service';
import { MealCardComponent } from "./meal-card/meal-card.component";
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-categories',
  imports: [MealCardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {


  categories!: Category[];
  private subscription: any;
  meals!: Meal[]
  placeholders: number[]=[1,2,3,4,5,6,7,8,9,10]

  constructor(private mealsService: MealsService) { }

  getAllCats() {
    this.subscription = this.mealsService.getAllCategories().subscribe({
      next: (cats) => {
        this.categories = cats.categories;

      }
    })
  }

  getMealsByCat(cat: string) {
    this.mealsService.getMealsByCategory(cat).subscribe({
      next: (meals) => {
        this.meals = meals.meals;
        localStorage.setItem("currentCat" , cat)
      }
    })
  }

  getAllMeals() {
    this.subscription = this.mealsService.getAllMeals().subscribe({
      next: (meals) => {
        this.meals = meals.meals;
        localStorage.setItem("currentCat", "all")

      }
    })
  }
  getSelectedCat(elem : Event) {
    const cat = (elem.target as HTMLInputElement).value;
    this.getMealsByCat(cat);
    localStorage.setItem("currentCat" , cat.toLowerCase());
  }
  isCurrentCat(cat : string){
    return localStorage.getItem("currentCat")?.toLowerCase() === cat

  }
  ngOnInit(): void {
    const cat:string = localStorage.getItem("currentCat") as string;
    if(cat === "all"){
      this.getAllMeals()
    }else {
      this.getMealsByCat(cat)
    }
    this.getAllCats()
  }


  ngOnDestroy(){
    // localStorage.removeItem("currentCat");
    this.subscription.unsubscribe();
  }




}
