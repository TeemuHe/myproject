import {Pipe, PipeTransform} from '@angular/core';
import {News} from '../classes/news';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: News[], searchText: string) {
    if (!items || !searchText) {
      return items;
    }

    return items.filter(item =>
      item.Title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
