import { Component, inject} from '@angular/core';
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from '../housinglocation';
import { CommonModule, NgFor } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent, NgFor],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  // templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  
})
export class HomeComponent {
  housingLocationList:HousingLocation[]=[];
  housingService:HousingService=inject(HousingService);
  filteredLocationList:HousingLocation[]=[]
  
  filterResults(text:string):void{
     if(!text){
      this.filteredLocationList = this.housingLocationList;
      return;
     }
      this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
  }

  constructor(){
    this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[])=>{
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
}