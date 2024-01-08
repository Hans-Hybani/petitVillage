import { Injectable } from '@angular/core';
import { Carte } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
        
        AllCard:Carte[] = [     
                {
                        id:1,
                        imageUrl: "../../assets/le-camps-romain.jpg",
                        title: "Card title",
                        prix: 20.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus"
                },
                {
                        id:2,
                        imageUrl: '../../assets/pixi-l-empire-du-milieu.jpg',
                        title: "Card title",
                        prix: 12.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus"
                },
                {
                        id:3,
                        imageUrl: '../../assets/figurine-de-collection-bulle-cleopatre-qu-on-serve-l-aperitif-aux-crocodiles-sacres.jpg',
                        title: "Card title",
                        prix: 15.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus"
                },
                {
                        id:4,
                        imageUrl: '../../assets/figurine-de-collection-bulle-cesar-veni-vidi-vici.jpg',
                        title: "Card title",
                        prix: 10.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus" 
                },
                {
                        id:5,
                        imageUrl: '../../assets/figurine-de-collection-bulle-asterix-ca-m-enerve.jpg',
                        title: "Card title",
                        prix: 25.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus"
                },
                {
                        id:6,
                        imageUrl: '../../assets/figurine-de-collection-bulle-idefix.jpg',
                        title: "Card title",
                        prix: 5.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus"
                },
                {
                        id:7,
                        imageUrl: '../../assets/figurine-de-collection-bulle-obelix-oui-je-boude-et-alors.jpg',
                        title: "Card title",
                        prix: 30.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus"
                },
                {
                        id:8,
                        imageUrl: '../../assets/obelix-et-son-tonneau.jpg',
                        title: "Card title",
                        prix: 15.99,
                        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                        button: "Voir Plus"
                }
        ];
        selectedCard: Carte | undefined;

        getSelectedCard(): Carte | undefined {
                return this.selectedCard;
        }

        setSelectedCard(card: Carte): void {
                this.selectedCard = card;
        }
}

