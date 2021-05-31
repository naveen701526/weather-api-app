const key = 'PMzDXDQFErGEeGQ8gwmpwd0wqYEZI9Ni';

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    // return data[0];
    console.log(data);
};

const getCityInfo = async (cityName) => {
    const base =
        'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${cityName}`;

    const response = await fetch(base + query);

    const data = await response.json();

    // return data[0];
    console.log(data);
};

// 204842

getWeather(204842);
