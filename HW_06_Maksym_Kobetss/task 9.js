// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

import users from "./users.js"

const getNamesSortedByFriendsCount = users => {
let res = []
  res.push (users.map((user) =>  user.friends.length + " " + user.name))
  return res.sort((a,b) => a-b)
  
  
};

console.log(getNamesSortedByFriendsCount(users));

// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]