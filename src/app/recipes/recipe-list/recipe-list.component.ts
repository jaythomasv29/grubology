import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //recipes list
  recipes: Recipe[] = [
    new Recipe("Bacon", "Fatty goodness from pigs", "https://www.simplyrecipes.com/wp-content/uploads/2019/08/baked-bacon-Lead-1-768x512.jpg")
  ];
    
  constructor() { }

  ngOnInit() {
  }

}
