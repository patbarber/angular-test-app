import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500  via-emerald-500 to-violet-800 animate-spin"
    ></div>
  `,
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {}
