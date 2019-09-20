import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
