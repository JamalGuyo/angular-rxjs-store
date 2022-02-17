import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from './store';

interface Todo {
  id: number;
  todo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  todos$: Observable<Todo[]> = this.store.select<Todo[]>('todos');

  constructor(private store: Store) {
    this.store.set('todos', [
      { id: 1, todo: 'Wake Up' },
      { id: 2, todo: 'Take a piss' },
      { id: 3, todo: 'Brush my teeth' },
      { id: 4, todo: 'Do a 100 pushups' },
      { id: 5, todo: 'Take cold shower' },
      { id: 6, todo: 'Take breakfast' },
      { id: 7, todo: 'Plan the day' },
      { id: 8, todo: 'Start 1st hour of learning' },
    ]);
  }
}
