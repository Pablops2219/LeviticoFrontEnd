import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-main-noe',
  imports: [RouterModule],
  templateUrl: './main-noe.component.html',
  styleUrl: './main-noe.component.css'
})
export class MainNoeComponent {

  @ViewChild('carousel') carousel!: ElementRef;

  ngAfterViewInit() {
    const carouselEl = document.getElementById('carousel')!;
    const prevBtn = document.querySelector('.prev-btn')!;
    const nextBtn = document.querySelector('.next-btn')!;

    const cardWidth = 260; // 240px card + 20px margin

    prevBtn.addEventListener('click', () => {
      carouselEl.scrollLeft -= cardWidth;
    });

    nextBtn.addEventListener('click', () => {
      carouselEl.scrollLeft += cardWidth;
    });
  }


  

}
