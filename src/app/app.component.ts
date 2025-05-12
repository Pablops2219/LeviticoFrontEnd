import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductosLocalesComponent } from "./component/productos-locales/productos-locales.component";



@Component({
  selector: 'app-root',

  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, ProductosLocalesComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GastroTerreta';
}
