
let password = 'adminpassword'
let message = prompt('Введите пароль')

if(message == password){
    alert('Добро пожаловать!')
}
else if(message == null){
 alert('отменено пользователем')
} 

else if(message !== password)
    alert('Доступ запрещен, неверный пароль!')
