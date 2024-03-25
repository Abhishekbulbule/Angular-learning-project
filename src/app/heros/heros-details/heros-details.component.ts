import { Component, Input } from '@angular/core';
import { Owner } from '../owner';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heros-details',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule],
  templateUrl: './heros-details.component.html',
  styleUrl: './heros-details.component.css'
})
export class HerosDetailsComponent {
  @Input() owner?:Owner;
}
