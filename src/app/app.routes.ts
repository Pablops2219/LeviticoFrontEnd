import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReciepeListComponent } from './reciepe-list/reciepe-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: ReciepeListComponent }
];
