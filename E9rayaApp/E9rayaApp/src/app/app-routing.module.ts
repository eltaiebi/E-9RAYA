import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ],
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
