import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service' ;

@Injectable({
  providedIn: 'root' /* root: injector,
  providedIn: provider metadata*/
})
export class HeroService {

  constructor(public messageService: MessageService) { } /* Should be public - angular only binds to public comp properties*/

  getHeroes(): Observable<Hero[]> {
    /*TODO:send the message _after_ fetching the heroes*/
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES);
  }
}
