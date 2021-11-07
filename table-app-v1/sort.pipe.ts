import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: User[], propName: string): User[] {
    return value.sort(function (a: any, b: any) {
      const nameA = a[propName];
      const nameB = b[propName];
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
}
