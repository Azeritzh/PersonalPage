import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { NavigationProjectMenuComponent } from './navigation-project-menu/navigation-project-menu.component';

const routes: Routes = [
  {path: 'home', component: NavigationMenuComponent},
  {path: 'project', component: NavigationProjectMenuComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
