import { createElement } from '../framework/render.js';

function createTasksListComponentTemplate() {
    return `
        <div class="tasks-list">
            <h2 class="title">Название блока</h2>
            <ul class="tasks-container"></ul>
        </div>
    `;
}

export default class TasksListComponent {
    getTemplate() {
        return createTasksListComponentTemplate();
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