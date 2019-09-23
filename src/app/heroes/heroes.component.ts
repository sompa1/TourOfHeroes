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
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  */

  heroes = HEROES; /* heroes tömb property */

  constructor() { }

  ngOnInit() {
  }
}
