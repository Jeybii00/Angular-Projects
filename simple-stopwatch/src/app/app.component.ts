import { Component } from '@angular/core';
import { SimpleStopwatchComponent } from './simple-stopwatch/simple-stopwatch.component';

@Component({
  selector: 'app-root',
  imports: [SimpleStopwatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
