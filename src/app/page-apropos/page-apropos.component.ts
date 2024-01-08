import { Component } from '@angular/core';
import { CardService } from '../services/products.service';

@Component({
  selector: 'app-page-apropos',
  standalone: true,
  imports: [],
  templateUrl: './page-apropos.component.html',
  styleUrl: './page-apropos.component.scss'
})
export class PageAproposComponent {

  images: { name: string, path: string }[] = [];

  constructor(private cardService: CardService) {
    this.images = this.cardService.images;
  }
}
