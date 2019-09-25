import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = []; // heroes array property

  constructor(private heroService: HeroService) { } // dependency injuction

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(emittedheroes => this.heroes = emittedheroes.slice(1, 5));
  }
  //  returns the sliced list of heroes at positions 1 and 5

}
