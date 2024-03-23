import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  // templateUrl: './details.component.html',
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Units available: {{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi? 'Yes':'No'}}</li>
        <li>Does this location have laundry: {{housingLocation?.laundry ? 'Yes':'No'}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
      {{this.formSub}}
    </section>

  </article>
`,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute=inject(ActivatedRoute);
  HousingService=inject(HousingService);
  housingLocation : HousingLocation|undefined;
  housingLocationId = -1;
  applyForm=new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl('')
  });
  formSub = '';
  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation=this.HousingService.getHousingLocationById(housingLocationId);
  }

  submitApplication(){
    this.formSub = this.HousingService.submitApplication(this.applyForm.value.firstName ?? '', this.applyForm.value.lastName ?? '', this.applyForm.value.email ?? '');
  }
}
