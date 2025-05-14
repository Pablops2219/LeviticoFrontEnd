import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
=======
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductosLocalesComponent } from "./component/productos-locales/productos-locales.component";



@Component({
  selector: 'app-root',

  imports: [RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent, ProductosLocalesComponent],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
>>>>>>> 7f9cc7298ad01dde131254b92a4c42c4f713b4d8
})
export class AppComponent {
  title = 'GastroTerreta';
}
