// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

import users from "./users.js";

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc , user ) =>   { return acc.concat(user.skills) },[])
    .sort()
    .filter((el, id, arr) => arr.indexOf(el) === id)
};

  console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]