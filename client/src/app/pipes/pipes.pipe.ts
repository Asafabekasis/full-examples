import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({
  standalone: true,
  name: 'multiplierPipe',
})
export class MultiplierPipe implements PipeTransform {

  transform(value: number) {
    return value * 1000;
  }
}