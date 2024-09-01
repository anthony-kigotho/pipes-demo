import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet',  // Same pipe name as before
  standalone: true,
})
export class GreetPipe implements PipeTransform {
  transform(value: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${value}!`;  // Now it uses the greeting passed in
  }
}
