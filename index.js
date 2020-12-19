// const url =
//   "https://api.openweathermap.org/data/2.5/weather?id=625144&appid=019911fb81dd7e07a0e2713f736acb34"
// const f = async () => {
//   let promise = await fetch(url)
//   let response = await promise
//   const obj = await response.json()
//   document.body.innerHTML = `${obj.name} ${Math.floor(obj.main.temp-273)}C ${obj.weather[0].main}`
// }

// f()

// const axi = (async() =>{
//   let promise = await axios.get(url)
//   const {data} = promise;
//   console.log(promise)
//   document.body.innerHTML = `${data.name} ${Math.floor(data.main.temp-273)}C ${data.weather[0].main}`
// })

// axi();

// let promise = new Promise((resolve, reject)=> {
//   resolve(fetch(url))
// })
// obj =promise.then((data)=>data.json()).then((data)=>console.log(data))

// let obj;
// function getDate(date){
//   obj=date;
//   console.log(obj);
// }

// let promise = (fetch(url))

// let a
// obj =promise.then((data)=>data.json()).then((data)=>console.log(a=data))

// console.log(obj.then())

const input = document.getElementById("input")
const button = document.getElementById("button")
const button2 = document.getElementById("button2")

const url = "https://api.openweathermap.org/data/2.5/weather?q="
const key = "&appid=019911fb81dd7e07a0e2713f736acb34"

const request = (e) => {
  e.preventDefault()
  const req = `${url}${input.value}${key}`

  const axi = async () => {
    let promise = await axios.get(req)
    const { data } = promise
    console.log(promise)
    document.body.innerHTML = `${data.name} ${Math.floor(
      data.main.temp - 273
    )}C ${data.weather[0].main}`
  }

  axi()
}

button.addEventListener("click", (e) => request(e))

const checkRequest = async (e) => {
  // const response = await axios(options)
  // console.log(response)
  console.log(1)
}

button2.addEventListener("click", (e) => checkRequest(e))

function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  }

  this.calculate = (str) => {
    const arr = str.split(" ")
    const a = +arr[0]
    const b = +arr[2]
    const operand = arr[1]
    return this.methods[operand](a, b)
  }

  this.addMethod = (name, func) => {
    this.methods[name] = func
  }
}

let calc = new Calculator()

console.log(calc.calculate("3 + 7"))

let powerCalc = new Calculator()
powerCalc.addMethod("*", (a, b) => a * b)
powerCalc.addMethod("/", (a, b) => a / b)
powerCalc.addMethod("**", (a, b) => a ** b)

let result = powerCalc.calculate("2 ** 3")
console.log(result) // 8

function makeCounter(a) {
  let count = a

  return function (b) {
    return (count += b)
  }
}

// let counter = makeCounter(10)
// let counter2 = makeCounter(5)

// console.log(counter(5)) // 0
// console.log(counter(6)) // 1

// console.log(counter2(2)) // ?
// console.log(counter2(4)) // ?

function makeArmy() {
  let shooters = []

  let i = 0
  while (i < 10) {
    let j = i
    let shooter = function () {
      // функция shooter
      console.log(j) // должна выводить порядковый номер
    }
    shooters.push(shooter)
    i++
  }

  return shooters
}
// makeArmy()

let army = makeArmy()

army[0]() // у 0-го стрелка будет номер 10
army[5]() // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...


