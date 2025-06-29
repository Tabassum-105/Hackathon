import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeWords',
  standalone: false
})
export class CapitalizeWordsPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    return value
      .split(' ')
      .map(word => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
