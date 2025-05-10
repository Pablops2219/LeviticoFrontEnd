import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  famousDishes = [
    { img: '/img1.jpg', name: 'Paella' },
    { img: '/img1.jpg', name: 'Fideuá' },
    { img: '/img1.jpg', name: 'Arrós al forn' },
    { img: '/img1.jpg', name: 'Esgarraet' }
  ];

  stories = [
    {
      img: '/img1.jpg',
      title: 'La tradición de la horchata',
      description: 'Descubre la historia y tradición de esta bebida típica valenciana.'
    },
    {
      img: '/img1.jpg',
      title: 'El origen del all i pebre',
      description: 'Conoce el origen de este plato tradicional de la Albufera.'
    }
  ];

  seasonalCalendar = [
    { icon: '/img1.jpg', alt: 'Alcachofa' },
    { icon: '/img1.jpg', alt: 'Naranja' },
    { icon: '/img1.jpg', alt: 'Guisantes' }
  ];
}
