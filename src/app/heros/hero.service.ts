import { Injectable } from '@angular/core';
import { Owner } from './owner';
import { OWNERS } from './dummy-owners';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getOwners() : Owner[]{
    return OWNERS;
  }

  getOwner(id: number): Owner {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const owner = this.getOwners().find(h => h.id === id)!;
    this.messageService.addMessage(`OwnerService: fetched Owner id=${id}`);
    return owner;
  }
}
