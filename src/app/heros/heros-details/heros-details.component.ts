import { Component, Input } from '@angular/core';
import { Owner } from '../owner';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessagesComponent } from '../messages/messages.component';
@Component({
  selector: 'app-heros-details',
  standalone: true,
  imports: [NgIf, UpperCasePipe, FormsModule, MessagesComponent],
  templateUrl: './heros-details.component.html',
  styleUrl: './heros-details.component.css'
})
export class HerosDetailsComponent {
  own:Owner|undefined
  @Input() owner?:Owner;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getOwner();
  }
  
  getOwner(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.own =  this.heroService.getOwner(id)
  }

  goBack():void{
    this.location.back();
  }
}
