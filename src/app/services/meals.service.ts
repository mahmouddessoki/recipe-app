import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private http: HttpClient) { }
  getAllCategories(): Observable<any> {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/categories.php?api_key=1");
  }

  getMealsByCategory(cat: string): Observable<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
  }
  getAllMeals(): Observable<any> {
    return this.http.get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  }
  getMealDetails(id: string): Observable<any>{
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}
