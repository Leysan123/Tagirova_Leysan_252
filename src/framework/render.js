export function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template.trim(); // trim() убирает лишние пробелы и переносы строк
  return newElement.firstElementChild;
}


export function render(component, container, place = 'beforeend') {
  container.insertAdjacentElement(place, component.getElement());
}

export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};
