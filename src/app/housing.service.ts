import { inject, Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { Observable, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// rIIqfHqGzvU3WmcfnDHMnsBFL4OBP8VlECDcdyGApLF0xvqkQHzU3GUv
export class HousingService {

  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://localhost:3000/locations';
  newUrl = 'assets/db.json';
  private http = inject(HttpClient);
  constructor() { }
  
  newData:any;
  getAllData(){
    this.http.get('/assets/db.json').subscribe(data => {
      this.newData = data;
    });
    return this.newData;
  }

  // async getAllHousingLocations():Promise<HousingLocation[]>{
  //   const data = await fetch(this.url);
  //   return await data.json()??[];
  // }

  newItem : HousingLocation|undefined;
  getHousingLocationById(id: number) {
    this.newItem = this.newData.find((item:HousingLocation) => item.id === id);
    return this.newItem;
  }

  submitApplication(firstName:string, lastName:string, email:string):string{
    let text :string = `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`;
    console.log(text);
    return text;
  }
}
