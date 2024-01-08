import { Component, NgModule, OnInit } from '@angular/core';
import { Carte } from '../models/product.model';
import { CardService } from '../services/products.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SortByPricePipeModule } from '../sort-by-pricepipe/sort-by-price.pipe';
import { FilterByNamePipeModule } from '../sort-by-pricepipe/filter-by-name.pipe';


@Component({
  selector: 'app-page-accueil',
  standalone: true,
  imports: [CommonModule,FormsModule,SortByPricePipeModule,FilterByNamePipeModule],
  templateUrl: './page-accueil.component.html',
  styleUrl: './page-accueil.component.scss',
})


export class PageAccueilComponent implements OnInit {

  
  AllCard!:Carte[];

  constructor(private cardService: CardService, private router: Router ) {}

  ngOnInit() {
    this.AllCard = this.cardService.AllCard;
  }

  redirectToProduit(card: Carte) {
    this.cardService.setSelectedCard(card);
    this.router.navigate(['produit']);
  }

  selectedSortOption: string = 'moincher';
  searchTerm: string = '';
  
  onSearch() {
    if (this.searchTerm.trim() === '') {
      this.AllCard = this.cardService.AllCard;
    } else {
      this.AllCard = this.cardService.AllCard.filter(card =>
        card.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  } 
}
