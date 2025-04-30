import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cfaCurrency',
  standalone: true
})
export class CfaCurrencyPipe implements PipeTransform {
  transform(value: number | string): string {
    return `${value} FCFA`;
  }
}
