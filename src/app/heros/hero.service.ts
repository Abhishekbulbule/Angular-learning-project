import { Injectable } from '@angular/core';
import { Owner } from './owner';
import { OWNERS } from './dummy-owners';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }

  getOwners() : Owner[]{
    return OWNERS;
  }
}
