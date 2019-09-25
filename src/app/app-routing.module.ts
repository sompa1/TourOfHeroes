import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // app can have routing functionality

import { HeroesComponent } from './heroes/heroes.component'; // will give the Router somewhere to go once you configure the routes
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component' ;

const routes: Routes = [
  // configurate the routes
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id' , component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({ // initializes the router
  imports: [RouterModule.forRoot(routes)], // adds the RouterModule to the AppRoutingModule imports array and configures it with the routes
  // supplies the service providers and directives needed for routing
  // amit használni akarok a modulban
  exports: [RouterModule] // it will be available throughout the app.
  // shared: amit mások is akarnak használni a modulon keresztül
})
export class AppRoutingModule { }
