import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HerosComponent } from './heros/heros.component';
import { HerosDetailsComponent } from './heros/heros-details/heros-details.component';


export const routes: Routes = [
    {path:'', title:"Home page", component:HomeComponent},
    {path:'details/:id', title:"Details", component:DetailsComponent},
    {path:'detail/:id', title:"Owner Details", component:HerosDetailsComponent},
    {path:'heroes', title:"Heroes", component:HerosComponent},
    {path:'dashboard', title:"Dashboard", component:HerosComponent},
];
