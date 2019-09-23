import { Component, OnInit, Input } from '@angular/core';
/* hero property must be an Input property
* external HeroesComponent will bind to it
*/
import { Hero } from '../hero' ; /*The HeroDetailComponent template binds to the component's hero property which is of type Hero*/

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero ; /* input property, mivel a szülő komponensből kapja meg az ott kiválasztott hero-t */
  /* This component simply receives a hero object through its hero property and displays it. */

  constructor() { }

  ngOnInit() {
  }

}
