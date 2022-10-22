function city_country(city, country = 'pakistan') {
    const cityName = city.toUpperCase() + city.slice(1);
    const countryName = country.toUpperCase() + country.slice(1);
    console.log(`${cityName}, ${countryName}`);
}

city_country('islamabad');
city_country('karachi');