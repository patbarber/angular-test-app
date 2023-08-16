import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ListsService } from '../lists.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
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
      <div
        *ngIf="list$ | async; else loading"
        class="mt-2 bg-[#C7FAE9] rounded-md p-2"
      >
        <p
          *ngFor="let item of list$ | async; index as i"
          class="grid grid-cols-2"
        >
          {{ item.Item }}
          <button
            class="bg-[#15BEE0] hover:opacity-70"
            (click)="removeFromList(i)"
          >
            delete
          </button>
        </p>
      </div>

      <ng-template #loading>
        <div class="flex justify-center my-2">
          <app-loading></app-loading>
        </div>
      </ng-template>
    </section>
  `,
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, LoadingComponent],
})
export class HomeComponent implements OnInit {
  list: any[] = [];
  inputValue = '';
  list$: Observable<any[]>;

  listService = inject(ListsService);

  itemsForm = new FormGroup({
    item: new FormControl(''),
  });

  ngOnInit(): void {
    this.list$ = this.listService.getList();
  }

  callingFunction() {
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
