import { Routes } from '@angular/router';

import { MainComponent } from './component/main/main.component';
import { ProductosLocalesComponent } from './component/productos-locales/productos-locales.component';
import { ReciepeListComponent } from './component/reciepe-list/reciepe-list.component';
import { MainNoeComponent } from './component/main-noe/main-noe.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  { path: '', component: MainNoeComponent },
  { path: 'productos-locales', component: ProductosLocalesComponent },
  { path: 'recipes', component: ReciepeListComponent },
  { path: 'main-noe', component: MainNoeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'reciepe-list', component: ReciepeListComponent },
  { path: 'main', component: MainComponent },
];
