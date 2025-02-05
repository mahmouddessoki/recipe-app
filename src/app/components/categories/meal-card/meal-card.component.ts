import { Component, Input } from '@angular/core';
import { Meal } from '../../../interfaces/meal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal-card',
  imports: [RouterLink],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss'
})
export class MealCardComponent {
  @Input({required:true}) meal!: Meal;
}
