// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

import users from "./users.js"

const getInactiveUsers = users => {
  
  return   users.filter((user) =>   user. isActive === false  )
  

};


console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]