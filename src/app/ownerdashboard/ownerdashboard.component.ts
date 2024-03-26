import { Component } from '@angular/core';
import { Owner } from '../heros/owner';
import {HeroService} from '../heros/hero.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-ownerdashboard',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './ownerdashboard.component.html',
  styleUrl: './ownerdashboard.component.css'
})
export class OwnerdashboardComponent {

  owners : Owner[] = [];
  constructor(private ownerService:HeroService){}
  getHeroes():void{
    this.owners = this.ownerService.getOwners().slice(1,5);
  }


  ngOnInit(): void {
    this.getHeroes();
  }
  
}
