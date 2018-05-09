import { Component } from '@angular/core';
import { Todo } from './interface/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To Do List';
  addBtnText = 'Add';
  list: Todo[] = [
    {
      id: 1,
      checked: false,
      text: 'Hit the gym',
    },
    {
      id: 2,
      checked: true,
      text: 'Pay bills',
    },
    {
      id: 3,
      checked: false,
      text: 'Meet George',
    },
    {
      id: 4,
      checked: false,
      text: 'Buy eggs',
    },
    {
      id: 5,
      checked: false,
      text: 'Read a book',
    },
    {
      id: 6,
      checked: false,
      text: 'Organize office',
    },
  ];

  /** 總 todo 數量，包含已刪除的 */
  count = this.list.length;

  /** 新增 Todo */
  addTodo(newTodo: HTMLInputElement) {
    if (newTodo.value === '') {
      alert('You must write something!');
      return;
    }
    /** 新增 todo */
    this.count++;
    this.list = [...this.list, {
      id: this.count,
      checked: false,
      text: newTodo.value,
    }];

    /** 清空輸入框 */
    newTodo.value = '';
  }

  /** 刪除 Todo */
  deleteTodo(id: number) {
    this.list = this.list.filter( todo => todo.id !== id );
  }

  /** 變動 Todo checked 狀態 */
  toggle(id: number) {
    this.list = this.list.map((todo) => {
      if (todo.id === id) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
  }
}
