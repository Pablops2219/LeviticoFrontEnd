import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-reciepe-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  filteredRecipes = [...this.popularRecipes];
  searchTerm: string = '';
  expandedRecipeIndex: number | null = null;

  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(300)
    ).subscribe(term => {
      this.filterRecipes(term);
    });
  }

  toggleSteps(index: number): void {
    if (this.expandedRecipeIndex === index) {
      this.expandedRecipeIndex = null;
    } else {
      this.expandedRecipeIndex = index;
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedRecipeIndex === index;
  }

  onSearchChange(): void {
    this.searchSubject.next(this.searchTerm);
  }

  filterRecipes(term: string): void {
    const lowerTerm = term.toLowerCase();
    this.filteredRecipes = this.popularRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(lowerTerm) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerTerm))
    );
    this.expandedRecipeIndex = null; // Collapse any expanded recipe on search
  }

  onExploreClick(): void {
    this.searchTerm = '';
    this.filteredRecipes = [...this.popularRecipes];
    this.expandedRecipeIndex = null;
  }
}
