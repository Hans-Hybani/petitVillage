import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carte } from '../models/product.model';
import { CardService } from '../services/products.service';
import { Router } from '@angular/router';
import { PageAccueilComponent } from '../page-accueil/page-accueil.component'


@Component({
  selector: 'app-page-detail-produit',
  standalone: true,
  imports: [CommonModule, PageAccueilComponent],
  templateUrl: './page-detail-produit.component.html',
  styleUrl: './page-detail-produit.component.scss'
})
export class PageDetailProduitComponent implements OnInit {
  
  AllCard!:Carte[];

  selectedCard: Carte | undefined;

  constructor( private cardservice: CardService, private router: Router){}
  
  ngOnInit() {
    this.selectedCard = this.cardservice.getSelectedCard();
  }
}
