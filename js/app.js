const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const {cityDets, weather} = data;

    // update details template
    details.innerHTML = `
    <h5>${cityDets.EnglishName}</h5>
    <div>${weather.WeatherText}</div>
    <div>
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    const iconValue =
        weather.WeatherIcon < 10
            ? '0' + weather.WeatherIcon
            : weather.WeatherIcon;

    // update the night / day and icon images
    const iconSrc = `https://developer.accuweather.com/sites/default/files/${iconValue}-s.png`;

    icon.setAttribute('src', iconSrc);

    const timeSrc = weather.IsDayTime ? './daytime.svg' : './nighttime.svg';

    time.setAttribute('src', timeSrc);

    // remove the d-none class if present
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};

const updateCity = async (city) => {
    const cityDets = await getCityInfo(city);
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
