import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetPipe } from './greet.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GreetPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes-demo';
}
