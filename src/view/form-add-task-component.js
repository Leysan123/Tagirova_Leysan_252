import { createElement } from '../framework/render.js';

function createFormAddTaskComponentTemplate() {
  return `
    <form class="add-task__form">
      <div class="add-task__input-wrapper">
        <label for="add-task">Новая задача</label>
        <input type="text" name="task-name" id="add-task" placeholder="Название задачи..." required>
      </div>
      <button class="add-task__button" type="submit">Добавить</button>
    </form>
  `;
}

export default class FormAddTaskComponent {
  getTemplate() {
    return createFormAddTaskComponentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
