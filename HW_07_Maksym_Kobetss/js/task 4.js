// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

let incrementBtn = document.querySelector('[data-action="increment"]')
let decrementBtn = document.querySelector('[data-action="decrement"]')
let value = document.querySelector('#value')
console.log(value)
let counterValue = 0

let increment = function () {
  counterValue += 1

  value.textContent = counterValue
}

let decrement = function () {
  counterValue -= 1
  value.textContent = counterValue
}

incrementBtn.addEventListener('click', increment)

decrementBtn.addEventListener('click', decrement)
