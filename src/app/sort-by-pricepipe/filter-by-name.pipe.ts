import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { Carte } from '../models/product.model';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(items: Carte[], searchTerm: string): Carte[] {
    if (!searchTerm || searchTerm.trim() === '') {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) => item.title.toLowerCase().includes(searchTerm));
  }
}
@NgModule({
  declarations: [FilterByNamePipe],
  exports: [FilterByNamePipe],
})
export class FilterByNamePipeModule {}
