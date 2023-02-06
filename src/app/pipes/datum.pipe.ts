import { Pipe, PipeTransform } from '@angular/core';
import { Dates } from '../components/greece/greece.component';

@Pipe({
  name: 'datum'
})
export class DatumPipe implements PipeTransform {

  transform(date: number | Dates): string {
    return typeof date === 'number'
      ? `${date}`
      : `${date.begin}; ${date.end}`;
  }

}
