import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MedidaCase',
  standalone: true
})
export class MedidaCasePipe implements PipeTransform {

  transform(height: number): string {
    if (height < 0.5) {
      return 'pequeno';
    } else if (height >= 0.5 && height < 1.0) {
      return 'baixinho';
    } else if (height >= 1.0 && height < 2.0) {
      return 'médio';
    } else if (height >= 2.0 && height < 3.0) {
      return 'alto';
    } else {
      return 'gigante';
    }
  }
}