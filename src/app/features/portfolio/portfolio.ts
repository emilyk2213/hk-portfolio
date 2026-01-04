import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css'],
})
export class Portfolio {
  activeImage!: number | null;

  portfolioImages = [
    "IMG_0245.jpeg",
    "IMG_0384.jpeg",
    "IMG_0838.jpg",
    "IMG_0266.jpeg",
    "IMG_0392.jpeg", // end of column
    "IMG_0451.jpg",
    "IMG_0694.jpg",
    "IMG_0667.jpg",
    "IMG_0440.jpeg",
    "IMG_0861.jpg",
    "IMG_0370.jpg",
    "IMG_0445.jpg", // end of column
    "IMG_0424.jpeg",
    "IMG_0524.jpg",
    "IMG_0654.jpg",
    "IMG_0635.jpg",
    "IMG_0293.jpeg",
    "IMG_0690.jpg", // end of column
    "IMG_0705.jpg",
    "IMG_0583.jpg",
    "IMG_0781.jpg",
    "IMG_0808.jpg",
    "IMG_0831.jpg",
    "IMG_0280.jpeg",
    "IMG_0326.jpg"
  ];

  openImage(image: string){
    const index = this.portfolioImages.indexOf(image);
    if (index !== -1) {
      this.activeImage = index;
    } else {
      this.activeImage = null;
      console.warn(`Image "${image}" not found in portfolioImages`);
    }

    // open lightbox
  }
}
