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



const input = document.getElementById('input');
const form = document.getElementById('form')
const button = document.getElementById('button')

const url =
  "https://api.openweathermap.org/data/2.5/weather?q="
const key = '&appid=019911fb81dd7e07a0e2713f736acb34'

const request = (e) => {
 
  e.preventDefault()
  const req = `${url}${input.value}${key}`
  
const axi = (async() =>{
  let promise = await axios.get(req)
  const {data} = promise;
  console.log(promise)
  document.body.innerHTML = `${data.name} ${Math.floor(data.main.temp-273)}C ${data.weather[0].main}`  
})

axi();
}

button.addEventListener('click',(e)=> request(e))

// let obj;
// function getDate(date){
//   obj=date;
//   console.log(obj);
// }

// let promise = (fetch(url))

// let a 
// obj =promise.then((data)=>data.json()).then((data)=>console.log(a=data))

// console.log(obj.then())