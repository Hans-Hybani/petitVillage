import { Component, OnInit } from '@angular/core';
import { Carte } from '../models/product.model';
import { CardService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss'
})
export class PageAccueilComponent implements OnInit {

  AllCard!:Carte[];

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit() {
    this.AllCard = this.cardService.AllCard;
  }

  redirectToProduit(card: Carte) {
    this.cardService.setSelectedCard(card);
    this.router.navigate(['produit']);
  }
}
