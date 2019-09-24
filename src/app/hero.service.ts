import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root' /**  root: injector, providedIn: provider metadata*/
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of (HEROES);
  }
}
