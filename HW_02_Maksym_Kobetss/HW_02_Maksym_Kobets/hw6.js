
const numbers = [];
let total = 0;

for ( let i = 0 ; true ; i++ ){
       let input = prompt('Введите число')

      if (input !== null){

       numbers.push(input);
      
     }
     else {

        
     for ( let clik of numbers) {
      
         total += Number(clik);
        
    }
    break;
}

}

alert (`Итого ${total}`);

