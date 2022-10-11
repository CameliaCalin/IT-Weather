const bucuresti = document.querySelector('.bucharest');
const timisoara = document.querySelector('.timisoara');
const oradea = document.querySelector('.oradea');

const selectedCity = document.getElementById('city');
const localStorageCity = localStorage.getItem('selectedCity');

function updateCity(city) {
  localStorage.setItem('selectedCity', city);

  selectedCity.innerHTML = city;
  displayCurrentWeather(city);
  displayForecastWeather(city);
}

const preselectedCity = localStorageCity || selectedCity.innerHTML;

updateCity(preselectedCity);

bucuresti.addEventListener('click', function() {
  updateCity(this.innerHTML);
});

timisoara.addEventListener('click', function() {
  updateCity(this.innerHTML);
});

oradea.addEventListener('click', function() {
  updateCity(this.innerHTML);
});