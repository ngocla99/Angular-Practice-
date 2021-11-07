import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone',
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string): string {
    const phone = '(+84)' + value.split('-').join('');
    return phone;
  }
}
