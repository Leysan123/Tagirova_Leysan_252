import HeaderComponent from './view/header-component.js';
import FormAddTaskComponent from './view/form-add-task-component.js';
import TaskboardComponent from './view/taskboard-component.js';
import TasksListComponent from './view/tasks-list-component.js';
import TaskComponent from './view/task-component.js';
import { render, RenderPosition } from './framework/render.js';

// Получаем контейнеры
const bodyContainer = document.querySelector('.board-app');
const formContainer = document.querySelector('.add-task');
const taskboardContainer = document.querySelector('.taskboard');

// Рендерим заголовок
render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

// Рендерим форму добавления задач
render(new FormAddTaskComponent(), formContainer);

// Создаем и рендерим доску задач
const taskboardComponent = new TaskboardComponent();
render(taskboardComponent, taskboardContainer);

// Добавляем списки задач
for (let i = 0; i < 4; i++) {
  const tasksListComponent = new TasksListComponent();
  render(tasksListComponent, taskboardComponent.getElement());

  // Добавляем задачи в списки
  for (let j = 0; j < 4; j++) {
    const taskComponent = new TaskComponent(`Название ${j + 1} задачи`);
    render(taskComponent, tasksListComponent.getElement());
  }
}
