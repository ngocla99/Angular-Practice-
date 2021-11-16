import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakLine',
})
export class BreakLinePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(\r\n|\r|\n)/g, '<div class="mb-2"></div>');
  }
}
