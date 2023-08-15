import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="grid justify-center">
      <div class="text-center">test</div>
      <form class="grid grid-cols-2">
        <input
          type="text"
          class="border-2"
          [(ngModel)]="inputValue"
          [ngModelOptions]="{ standalone: true }"
        />
        <button type="button" (click)="addItemToList(inputValue)">
          Search
        </button>
      </form>
      <div>
        <p *ngFor="let item of list; index as i">
          {{ item }}
          <button class="border-2" (click)="removeFromList(i)">delete</button>
        </p>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  list = ['test'];
  inputValue = '';
  addItemToList(value: string): void {
    this.list.push(value);
  }

  removeFromList(index: number): void {
    this.list.splice(index, 1);
  }
}
