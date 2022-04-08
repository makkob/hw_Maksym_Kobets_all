// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

import users from "./users.js"

const getUsersWithFriend = (users, friendName) => {

  return   users.filter((user) =>  user.friends.includes(friendName)) .map((user) =>   user.name  );
  
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' 