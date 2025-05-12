import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reciepe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent {
  popularRecipes = [
    {
      title: 'Paella Valenciana',
      description: 'Arroz con pollo, conejo y verduras',
      duration: '1h 30m',
      ingredients: ['Arroz', 'Pollo', 'Conejo', 'Verduras', 'Azafrán'],
      steps: [
        {
          name: 'Preparar ingredientes',
          description: 'Lavar y cortar los ingredientes.',
          img: '/img1.jpg'
        },
        {
          name: 'Cocinar',
          description: 'Cocinar todos los ingredientes en la paella.',
          img: '/img1.jpg'
        }
      ],
      img: '/img1.jpg'
    },
    {
      title: 'Esgarraet',
      description: 'Pimientos asados con bacalao y aceite de oliva',
      duration: '45m',
      ingredients: ['Pimientos', 'Bacalao', 'Aceite de oliva'],
      steps: [
        {
          name: 'Asar pimientos',
          description: 'Asar los pimientos hasta que estén tiernos.',
          img: '/img1.jpg'
        },
        {
          name: 'Mezclar ingredientes',
          description: 'Mezclar los pimientos con bacalao y aceite.',
          img: '/img1.jpg'
        }
      ],
      img: '/img1.jpg'
    }
  ];

  expandedRecipeIndex: number | null = null;

  toggleSteps(index: number): void {
    if (this.expandedRecipeIndex === index) {
      this.expandedRecipeIndex = null;
    } else {
      this.expandedRecipeIndex = index;
    }
  }
}
