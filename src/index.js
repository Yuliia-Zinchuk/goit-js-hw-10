import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  if (evt.target.value.trim() === '') {
    return;
  }
  evt.preventDefault();
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';

  const searchCountry = evt.target.value.trim();
  fetchCountries(searchCountry)
    .then(compareArray)
    .catch(error =>
      Notiflix.Notify.failure('Oops, there is no country with that names')
    )
    .finally(() => searchBox.reset);
}

function compareArray(countries) {
  if (countries.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (countries.length >= 2 && countries.length <= 10) {
    renderCountriesList(countries);
  } else {
    renderCountriesInfo(countries);
  }
}

function renderCountriesList(countries) {
  return (countryList.innerHTML = countries
    .map(country => {
      return `<li>
        <img class="picture" src="${country.flags.svg}" alt="flag" width="60">
                <h3>${country.name.official}</h3>
              
              </li>
          `;
    })
    .join(''));
}

function renderCountriesInfo(countries) {
  const { flags, name, capital, population, languages } = countries[0];
  return (countryInfo.innerHTML = `<ul class=country-title>
    <img src="${flags.svg}" alt="flag" width="60">
            <h2>${name.official}</h2></ul>
             <ul><li><h3>Capital: ${capital}</h3></li>
            <li><h3>Population: ${population}</h3></li>
            <li><h3>Languages: ${Object.values(languages)}</h3></li>
             </ul>`);
}
