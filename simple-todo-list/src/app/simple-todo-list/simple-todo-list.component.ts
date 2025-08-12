import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './simple-todo-list.component.html',
  styleUrl: './simple-todo-list.component.scss',
})
export class SimpleTodoListComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (!this.newTask.trim()) {
      this.newTask = '';
      return;
    }

    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
