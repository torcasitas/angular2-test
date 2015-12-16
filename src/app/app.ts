import {bootstrap, Component} from 'angular2/angular2';
import {TodoInput} from './TodoInput';

@Component({
  directives: [TodoInput],
  selector: 'my-app',
  template: `
    <h1> My first Angular 2 App</h1>
    <div><todo-input></todo-input></div>

  `
})

class AppComponent {}

bootstrap(AppComponent);