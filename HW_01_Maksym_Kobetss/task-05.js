// Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов Индия - 90 кредитов Ямайка - 130 кредитов


let country = prompt('Введите название страны в которую хотите оформить доставку');
let result = country.toLowerCase();
result = country[0].toUpperCase() + result.slice(1);


switch (result) {
    case'Китай':
      alert('Доставка в Китай будет стоить 150 кредитов')
      break
    case'Чили':
      alert('Доставка в Чили будет стоить 250 кредитов')
      break
    case'Австралия':
      alert('Доставка в Австралию будет стоить 165 кредитов')
     break
    case'Индия':
      alert('Доставка в Индию будет стоить 90 кредитов')
     break
    case'Ямайка':
      alert('Доставка в Ямайку будет стоить 130 кредитов')
     break
    default : {
    alert('В вашей стране доставка не доступна')
    }
}
