import { Routes } from '@angular/router';
<<<<<<< HEAD
import { MainNoeComponent } from './main-noe/main-noe.component';

export const appRoutes: Routes = [
  { path: '', component: MainNoeComponent },
 
];
=======

import { MainComponent } from './component/main/main.component';
import { ProductosLocalesComponent } from './component/productos-locales/productos-locales.component';
import { ReciepeListComponent } from './component/reciepe-list/reciepe-list.component';
import { MainNoeComponent } from './component/main-noe/main-noe.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'productos-locales', component: ProductosLocalesComponent },
  { path: 'recipes', component: ReciepeListComponent },
  { path: 'main-noe', component: MainNoeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reciepe-list', component: ReciepeListComponent },
];
>>>>>>> 7f9cc7298ad01dde131254b92a4c42c4f713b4d8
