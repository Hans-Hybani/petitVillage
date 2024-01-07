import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageAproposComponent } from './page-apropos/page-apropos.component';
import { PageDetailProduitComponent } from './page-detail-produit/page-detail-produit.component';
import { PageContactComponent } from './page-contact/page-contact.component'; 


export const routes: Routes = [
        { path: '', component: PageAccueilComponent },
        { path: 'apropos', component: PageAproposComponent },
        { path: 'produit', component: PageDetailProduitComponent},
        { path: 'contact', component: PageContactComponent}
];

@NgModule({
        imports:[
                RouterModule.forRoot(routes)
        ],
        exports:[
                RouterModule
        ]
})

export class AppRoutingModule {}
