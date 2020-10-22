import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {PlatformsListComponent} from './platforms/components/platforms-list/platforms-list.component';
import {ProjectListComponent} from './projects/components/project-list/project-list.component';


const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'architecture', pathMatch: 'full'
      },
      {
        path: 'architecture',
        component: PlatformsListComponent,
      },
      {
        path: 'portfolio',
        component: ProjectListComponent
      }
    ]
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
