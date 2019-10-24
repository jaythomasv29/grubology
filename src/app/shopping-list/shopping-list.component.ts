import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
//array of type Ingredient
  ingredients: Ingredient[] = [
    new Ingredient('Pork loin sliced', 10),
    new Ingredient('Salt', 3)
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
