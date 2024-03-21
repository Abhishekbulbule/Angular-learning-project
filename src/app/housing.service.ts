import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations():Promise<HousingLocation[]>{
    const data = await fetch(this.url);
    return await data.json()??[];
  }
  
  async getHousingLocationById(id:number):Promise<HousingLocation|undefined>{
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()??{};
  }

  submitApplication(firstName:string, lastName:string, email:string):string{
    let text :string = `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`;
    console.log(text);
    return text;
  }
}
