

const findLongestWord = function(string) {
  let arrey = string.split(' ');
  let maxWord = '' ;
  for (let idx of arrey ) {
      if (idx.length > maxWord.length){
        maxWord = idx;
      }
    }
    return maxWord;
  };
      

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
