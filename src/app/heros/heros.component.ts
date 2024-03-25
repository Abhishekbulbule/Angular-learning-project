import { Component } from '@angular/core';
import { Owner } from './owner';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OWNERS } from './dummy-owners';
import { HerosDetailsComponent } from './heros-details/heros-details.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@Component({
  selector: 'app-heros',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor,NgIf, HerosDetailsComponent, MessagesComponent],
  templateUrl: './heros.component.html',
  styleUrl: './heros.component.css'
})
export class HerosComponent {
  title="Owners Tour";
  name="Deme";
  selectedOwner?:Owner;
  onSelect(owner:Owner):void{
    this.selectedOwner=owner;
    this.messageService.addMessage(`OwnerComponent: Selected Owner id=${owner.id}`);
  }
  constructor(private onwerService:HeroService, private messageService:MessageService){}

  owners : Owner[] = [];
  getHeroes():void{
    this.owners = this.onwerService.getOwners();
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
}
