import { Component, OnInit, Input } from '@angular/core';
/* hero property must be an Input property
* external HeroesComponent will bind to it
*/
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero' ; /*The HeroDetailComponent template binds to the component's hero property which is of type Hero*/

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero ; /* input property, mivel a szülő komponensből kapja meg az ott kiválasztott hero-t */
  /* This component simply receives a hero object through its hero property and displays it. */

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }
  /*
  The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent.
  HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
  Location: Angular service for interacting with the browser
  */

 ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}

save(): void {
  this.heroService.updateHero(this.hero)
    .subscribe(() => this.goBack()); // navigates back to the previous view.
}

}
