import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterLink, HttpClientModule, JsonPipe, NgFor, CommonModule],
  template: `
  <main>
    <header class="brand-name">
      <a routerLink=""><img class="brand-logo" src="/favicon.ico" alt="logo" aria-hidden="true"> 
      <h1 class="m-5" routerLink="">Hotels && Homes</h1></a>
      <a [routerLink]="'/heroes'"><h1 class="m-5">Owners</h1></a>
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


