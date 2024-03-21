import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterLink],
  template: `
  <main>
    <header class="brand-name">
      <a routerLink=""><img class="brand-logo" src="/favicon.ico" alt="logo" aria-hidden="true"> 
      <h1 class="m-5" routerLink="">Hotels && Homes</h1></a>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>

`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
