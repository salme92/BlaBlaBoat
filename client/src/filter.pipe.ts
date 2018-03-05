import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cities: any[], field: string, value: string): any[] {
    if (!cities) {
      return [];
    }

    if (!value) {
      return cities;
    }

    const myPattern = new RegExp(value, 'i');
    return cities.filter(it => it[field].match(myPattern));
  }
}