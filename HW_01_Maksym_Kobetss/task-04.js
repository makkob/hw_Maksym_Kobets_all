// 123
let credits = 35500;
let pricePerDroid = 3000;
let nomberPerDroids =prompt('Внесите количетво дроидов');

let totalPrice = nomberPerDroids * pricePerDroid;

if(nomberPerDroids == null){
    alert('Отменено пользователем')
};
if(totalPrice > credits) {
    console.log('Недостаточно средств на счету!')
}else {
credits=credits-totalPrice
    alert(`Вы купили ${nomberPerDroids} дроидов , на счету осталось ${credits }кредитов.`)
} 
