import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name"></header>
      <section class="content h-screen bg-[#FFFAFC]">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-test-app';
}
