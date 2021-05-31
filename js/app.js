const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return {cityDets, weather};
};

cityForm.addEventListener('submit', (e) => {
    // prevent default action
    e.preventDefault();

    // // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update the ui with new city
    updateCity(city)
        .then((data) => updateUI(data))
        .catch((err) => console.log(err));
});
