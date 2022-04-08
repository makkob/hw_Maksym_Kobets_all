// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
// #validation-input {
//   border: 3px solid #BDBDBD;
// }
// #validation-input.valid {
//   border-color: #4CAF50;
// }
// #validation-input.invalid {
//   border-color: #F44336;
// }

let input = document.querySelector('#validation-input')
let len = Number(input.getAttribute('data-length'))

input.addEventListener('blur', event => {
  if (event.target.value.length !== len) {
    event.target.classList.remove('valid')
    event.target.classList.add('invalid')
  } else {
    event.target.classList.add('valid')
    event.target.classList.remove('invalid')
  }
  //   console.log(event.target.value.length)
})
