const apiKEY = "6b70d8617dd02f0c6b1129118f534be5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const img = document.querySelector('.weather-icon');

// async function checkWether(city) {
//   const response = await fetch(apiURL + city + `&appid=${apiKEY}`);
//   if (response.status == 404) {
//     document.querySelector('.error').style.display = 'block';
//     document.querySelector('.card__weather').style.display = 'none';
//   }
//   let data = await response.json();

//   console.log(data)

//   document.querySelector('.weather-city').innerHTML = data.name;
//   document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp) + "°C";
//   document.querySelector('.col-humidity').innerHTML = data.main.humidity + "%";
//   document.querySelector('.col-wind').innerHTML = data.wind.speed + "km/p";

//   if (data.weather[0].main === 'Clouds') {
//     img.src = "img/clouds.png"
//   } 
//   else if(data.weather[0].main === 'Clear') {
//     img.src = "img/clouds.png"
//   } 
//   else if(data.weather[0].main === 'Rain') {
//     img.src = "img/clouds.png"
//   } 
//   else if(data.weather[0].main === 'Drizzle') {
//     img.src = "img/clouds.png"
//   } 
//   else if(data.weather[0].main === 'Mist') {
//     img.src = "img/mist.png"
//   } 

// }

function checkWether(city) {
  fetch(apiURL + city + `&appid=${apiKEY}`)
    .then(response => {
      if(response.status === 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.card__weather').style.display = 'none'
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      document.querySelector('.weather-city').innerHTML = data.name;
      document.querySelector('.weather-temp').innerHTML = Math.round(data.main.temp) + '°C';
      document.querySelector('.col-humidity').innerHTML = data.main.humidity + '%';
      document.querySelector('.col-wind').innerHTML = data.wind.speed + 'km/p';

      if (data.weather[0].main === 'Clouds') {
        img.src = 'img/clouds.png'
      }
      else if (data.weather[0].main === 'Rain') {
        img.src = 'img/rain.png'
      }
      else if (data.weather[0].main === 'Clear') {
        img.src = 'img/clear.png'
      }
      else if (data.weather[0].main === 'Snow') {
        img.src = 'img/snow.png'
      }
      else if (data.weather[0].main === 'Mist') {
        img.src = 'img/mist.png'
      }
      else if (data.weather[0].main === 'Drizzle') {
        img.src = 'img/drizzle.png'
      }
    })
}

searchBtn.addEventListener('click', () => {
  checkWether(searchInput.value)
  document.querySelector('.card__weather').style.display = 'block';
})
