import { Component } from '@angular/core';
import { Owner } from './owner';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from './hero.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor,NgIf, RouterLink],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
  title="Owners Tour";
  name="Deme";

  constructor(private onwerService:HeroService){}

  owners : Owner[] = [];
  getHeroes():void{
    this.owners = this.onwerService.getOwners();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
}
