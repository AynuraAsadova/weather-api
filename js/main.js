const url = "https://api.openweathermap.org/data/2.5/";
const key = "be9da648741035f9d4105578f09421b5";

const setQuery = (e) => {
  if (e.keyCode == "13") {
    getResult(searchBar.value);
  }
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((response) => response.json())
    .then((data) => displayResult(data));
};

const displayResult = (data) => {
    console.log(data)
    const city = document.querySelector('.city');
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    const temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(data.main.temp)} &#8451;`;
    const descr = document.querySelector('.descr');
    descr.innerHTML = data.weather[0].main;
    const minmax = document.querySelector('.minmax');
    minmax.innerHTML = `${Math.round(data.main.temp_min)} &#8451; / ${Math.round(data.main.temp_max)} &#8451;`;
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
