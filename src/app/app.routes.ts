import { Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ProductosLocalesComponent } from './component/productos-locales/productos-locales.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'productos-locales', component: ProductosLocalesComponent},
    
];
