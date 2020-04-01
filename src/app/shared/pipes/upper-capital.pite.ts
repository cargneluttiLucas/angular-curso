import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'upperCapital'})

export class UpperCapital implements PipeTransform {
  transform(value: string): string {
    console.log(value);
    return value[0].toUpperCase() + value.substr(1);
  }
}
