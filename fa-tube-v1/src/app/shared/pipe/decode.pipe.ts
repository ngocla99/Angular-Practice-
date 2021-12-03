import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decode',
})
export class DecodePipe implements PipeTransform {
  transform(value: string): string {
    const str = value
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&')
      .replace(/&gt;/g, '&gt;>')
      .replace(/</g, '&lt;')
      .replace(/&quot;/g, '"');
    return str;
  }
}
