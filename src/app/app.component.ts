import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageAproposComponent } from './page-apropos/page-apropos.component';
import { PageDetailProduitComponent } from './page-detail-produit/page-detail-produit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    RouterLink,
    HeaderComponent,
    FooterComponent,
    PageContactComponent,
    PageAccueilComponent,
    PageAproposComponent,
    PageDetailProduitComponent,
    FontAwesomeModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor() {
    registerLocaleData(fr.default);
  }

  ngOnInit(){
  }
}
