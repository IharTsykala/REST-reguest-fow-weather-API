const url =
  "https://api.openweathermap.org/data/2.5/weather?id=625144&appid=019911fb81dd7e07a0e2713f736acb34"
const f = async () => {
  let promise = await fetch(url)
  let response = await promise
//   const container = document.getElementById('container');
//   console.log((await response.json()))
  const obj = await response.json()
  document.body.innerHTML = `${obj.name} ${Math.floor(obj.main.temp-273)}C ${obj.weather[0].main}`
}

f()