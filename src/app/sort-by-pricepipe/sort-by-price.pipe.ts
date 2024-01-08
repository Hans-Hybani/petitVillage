import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Carte } from '../models/product.model';

@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(items: Carte[], sortBy: string): Carte[] {
    if (!items || items.length <= 1) {
      return items;
    }

    switch (sortBy) {
      case 'moincher':
        return items.slice().sort((a, b) => a.prix - b.prix);
      case 'plusCher':
        return items.slice().sort((a, b) => b.prix - a.prix);
      default:
        return items;
    }
  }
}
@NgModule({
  declarations: [SortByPricePipe],
  exports: [SortByPricePipe],
})
export class SortByPricePipeModule {}
