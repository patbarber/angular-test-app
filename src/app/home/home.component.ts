import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <section class="grid justify-center">
      <div class="text-center p-4">
        <p class="text-3xl">Add Items To List</p>
      </div>
      <form
        [formGroup]="itemsForm"
        class=" rounded-md bg-[#F5A898] p-4"
        (ngSubmit)="callingFunction()"
      >
        <div class="grid grid-cols-2 justify-center gap-2 w-full">
          <input type="text" class="rounded-sm p-2" formControlName="item" />

          <div class="flex justify-center">
            <button
              type="button"
              class="bg-[#15BEE0] rounded-full hover:opacity-70 text-2xl  w-12 h-12"
              type="submit"
            >
              +
            </button>
          </div>
        </div>
      </form>
      <div class="mt-2 bg-[#C7FAE9] rounded-md p-2">
        <p *ngFor="let item of list; index as i" class="grid grid-cols-2">
          {{ item }}
          <button
            class="bg-[#15BEE0] hover:opacity-70"
            (click)="removeFromList(i)"
          >
            delete
          </button>
        </p>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  list: string[] = [];
  inputValue = '';

  itemsForm = new FormGroup({
    item: new FormControl(''),
  });

  callingFunction() {
    console.log(
      '🚀 ~ file: home.component.ts:62 ~ HomeComponent ~ callingFunction ~ itemsForm:',
      this.itemsForm.value.item
    );
    if (
      this.itemsForm.value.item === undefined ||
      this.itemsForm.value.item === null
    )
      return;

    this.list.push(this.itemsForm.value.item);
  }

  addItemToList(value: string): void {
    this.list.push(value);
  }

  removeFromList(index: number): void {
    this.list.splice(index, 1);
  }
}
