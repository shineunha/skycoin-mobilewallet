import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sky',
})
export class SkyPipe implements PipeTransform {

  transform(value: number) {
    return value / 1000000 + ' SKY';
  }
}