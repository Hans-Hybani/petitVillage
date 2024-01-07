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

  constructor( private cardservice: CardService, private router: Router){}

  ngOnInit() {
    this.AllCard = this.cardservice.AllCard;
  }

  redirectToProduit() {
    this.router.navigate(['produit']);
  }

}
