import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // app can have routing functionality
import { HeroesComponent } from './heroes/heroes.component'; // will give the Router somewhere to go once you configure the routes

const routes: Routes = [
  // configurate the routes
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({ // initializes the router
  imports: [RouterModule.forRoot(routes)], // adds the RouterModule to the AppRoutingModule imports array and configures it with the routes
  // supplies the service providers and directives needed for routing
  exports: [RouterModule] // it will be available throughout the app.
})
export class AppRoutingModule { }
