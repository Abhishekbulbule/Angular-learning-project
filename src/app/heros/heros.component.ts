import { Component } from '@angular/core';
import { Owner } from './owner';
import { NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OWNERS } from './dummy-owners';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
  title="Owners Tour";
  name="Deme";
  owner:Owner={
    id:1,
    name:'Deme'
  }
  owners = OWNERS;
}
