import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="grid justify-center">
      <div class="text-center p-4">
        <p class="text-3xl">Add Items To List</p>
      </div>
      <form class=" rounded-md bg-[#F5A898] p-4 ">
        <div class="grid grid-cols-2 justify-center gap-2 w-full">
          <input
            type="text"
            class="rounded-sm p-2"
            [(ngModel)]="inputValue"
            [ngModelOptions]="{ standalone: true }"
          />

          <div class="flex justify-center">
            <button
              type="button"
              class="bg-[#15BEE0] rounded-full hover:opacity-70 text-2xl  w-12 h-12"
              (click)="addItemToList(inputValue)"
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
  list = ['test'];
  inputValue = '';

  itemFormControl = new FormControl('');

  addItemToList(value: string): void {
    this.list.push(value);
  }

  removeFromList(index: number): void {
    this.list.splice(index, 1);
  }
}
