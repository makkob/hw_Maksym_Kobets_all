// Задание 5
// Напиши класс Car с указанными свойствами и методами.

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed : ${car.maxSpeed}, speed : ${car.speed}, isOn : ${car.isOn} , distance : ${car.distance}  price : ${car.price}`,
    )
  }
  constructor(car) {
    this.speed = 0
    this.price = car.price
    this.maxSpeed = car.maxSpeed
    this.isOn = false
    this.distance = 0
  }

  get Price() {
    this.price
  }

  set Price(newPrice) {
    this.price = newPrice
  }

  turnOn() {
    this.isOn = true
  }

  turnOff() {
    this.isOn = false
    this.speed = 0
  }

  accelerate(value) {
    this.maxSpeed >= this.speed + value ? (this.speed += value) : this.speed
  }

  decelerate(value) {
    this.speed - value > 0 ? (this.speed -= value) : this.speed
  }

  drive(hours) {
    this.isOn
      ? (this.distance = hours * this.speed + this.distance)
      : console.log('Машина заглушина')
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 })
mustang.turnOn()
mustang.accelerate(50)
mustang.drive(2)
Car.getSpecs(mustang)
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20)
mustang.drive(1)
mustang.turnOff()
Car.getSpecs(mustang)
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price) // 2000
mustang.price = 4000
console.log(mustang.price) // 4000
