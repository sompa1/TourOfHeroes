import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
/*
 * @Component is a decorator function
 * that specifies the Angular metadata for the component.
 * selector— the component's CSS element selector
 * templateUrl— the location of the component's template file.
 * styleUrls— the location of the component's private CSS styles.
 */
export class HeroesComponent implements OnInit {
  /*
  present the list of heroes
  */

  heroes: Hero[]; /* heroes tömb property */

  // selectedHero: Hero; nem kell

  constructor(private heroService: HeroService) { }
  /* defines a private heroService property and identifies it as a HeroService injection site. */
  /* When Angular creates a HeroesComponent, the Dependency Injection system sets
   the heroService parameter to the singleton instance of HeroService.
  */

  ngOnInit() {
    this.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; } // ha üres a string, akkor ne csinálj semmit
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe(); // itt nem csinál semmit a komponens azzal az Observable-lel,
    // amivel a subscribe visszatér, de kell mindenképpen a subscribe, mivel
    // As a rule, an Observable does nothing until something subscribes.
  }

  /*assigns the clicked hero from the template to the component's selectedHero*/
  /* onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(emittedheroes => this.heroes = emittedheroes);
    /* asynchronous: getHeroes() cannot return immediately with hero data, and the browser will not block while the service waits.*/
  }
}
