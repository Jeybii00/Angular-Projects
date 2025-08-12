import { Component } from '@angular/core';
import { SimpleTodoListComponent } from './simple-todo-list/simple-todo-list.component';

@Component({
  selector: 'app-root',
  imports: [SimpleTodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
