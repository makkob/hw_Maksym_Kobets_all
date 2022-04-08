// Задание 7 - дополнительное, выполнять не обязательно/
// Напиши скрипт управления личным кабинетом интернет банка.
//  Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.



// [5:32 PM] /*
// * Типов транзацкий всего два.
// * Можно положить либо снять деньги со счета.
//  */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [  ],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
      let newTransaction = {
          id: Math.random().toString().slice(2),
          amount : amount,
          type : type,
          
      }
     
     return this.transactions.push(newTransaction)
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    account.balance +=amount
    this.createTransaction(amount, Transaction.DEPOSIT)
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (account.balance < amount){
      console.log('Недостаточно средств');
    } else {
      account.balance -= amount;
      this.createTransaction(amount, Transaction.WITHDRAW )
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(` У Вас на счету ${account.balance} денег`);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let idToFind = this.transactions.find((elem)=> 
     elem.id === id );
     console.log(idToFind) 
      
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let typeToFind = this.transactions.find((elem) => 
      elem.type === type )
    console.log(typeToFind)
  },
};

// account.createTransaction(10, Transaction.WITHDRAW );
account.deposit(5);
account.deposit(25);
account.withdraw(20)
account.getBalance()
account.getTransactionDetails(`37893831735093153`)

account.getTransactionTotal('withdraw')

console.log(account.transactions)