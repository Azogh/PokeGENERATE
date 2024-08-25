import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTitleCase',
  standalone: true
})
export class toTitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    return value.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
  }
}