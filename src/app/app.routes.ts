import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReciepeListComponent } from './reciepe-list/reciepe-list.component';
import { MainNoeComponent } from './main-noe/main-noe.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: ReciepeListComponent },
  { path: 'main-noe', component: MainNoeComponent }
];
