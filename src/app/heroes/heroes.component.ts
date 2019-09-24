import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
/**
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

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  /* defines a private heroService property and identifies it as a HeroService injection site. */
  /* When Angular creates a HeroesComponent, the Dependency Injection system sets
   the heroService parameter to the singleton instance of HeroService.
  */

  ngOnInit() {
    this.getHeroes();
  }

  /*assigns the clicked hero from the template to the component's selectedHero*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(emittedheroes => this.heroes = emittedheroes);
    /* asynchronous: getHeroes() cannot return immediately with hero data, and the browser will not block while the service waits.*/
  }
}
