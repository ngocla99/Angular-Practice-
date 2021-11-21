import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') ingredientForm!: NgForm;
  ingredients!: Ingredient[];
  editItemIndex!: number;
  editItem!: Ingredient;
  editMode = false;
  subscription!: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.updateIngredient.subscribe(
      (i: number) => {
        this.editMode = true;
        this.editItemIndex = i;
        this.editItem = this.shoppingListService.getIngredient(i);
        setTimeout(() => {
          this.ingredientForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount,
          });
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(
      form.value['name'],
      form.value['amount']
    );
    if (!this.editMode) {
      this.shoppingListService.addIngredient(newIngredient);
    } else {
      this.shoppingListService.editIngredient(
        this.editItemIndex,
        newIngredient
      );
    }
    this.shoppingListService.activeLink.next();
    form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.shoppingListService.activeLink.next();
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onClear() {
    this.ingredientForm.form.patchValue({
      amount: 0,
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
