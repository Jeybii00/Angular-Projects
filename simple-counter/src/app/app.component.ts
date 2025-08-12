import { Component } from '@angular/core';
import { SimpleCounterComponent } from './simple-counter/simple-counter.component';

@Component({
  selector: 'app-root',
  imports: [SimpleCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
