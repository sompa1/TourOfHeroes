import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes'; /*heroes konstans tömb használata */

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

  heroes = HEROES; /* heroes tömb property */

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  /*assigns the clicked hero from the template to the component's selectedHero*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
