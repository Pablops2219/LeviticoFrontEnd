import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos = [
    {
      titulo: 'Feria de la Tapa en Valencia',
      descripcion: 'Degustación de tapas en el centro histórico.',
      fecha: '12 de junio de 2025',
      imagen: 'https://www.ejemplo.com/tapa.jpg'
    },
    {
      titulo: 'Ruta del arroz en la Albufera',
      descripcion: 'Paellas cocinadas en directo junto al lago.',
      fecha: '25 de julio de 2025',
      imagen: 'https://www.ejemplo.com/paella.jpg'
    }
  ];

  ngOnInit(): void {
    const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      center: { lat: 39.4699, lng: -0.3763 },
      zoom: 11,
    });
  }
}
