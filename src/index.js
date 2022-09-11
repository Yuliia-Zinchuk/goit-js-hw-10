import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
//console.dir(countryInfo);

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  if (evt.target.value.trim() === '') {
    return;
  }

  evt.preventDefault();
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
  searchCountry = evt.target.value.trim();

  fetchCountries(searchCountry)
    // .then(renderCountriesList) ///это без параметров
    // .then(countries => renderCountriesList(countries)) ///может без параметров
    .then(compareArray)
    //.then(countries => console.log(countries));

    .catch(error =>
      Notiflix.Notify.failure('Oops, there is no country with that names')
    );
  // .finally(() => searchBox.reset());
  // .finally(() => evt.currentTarget.reset());
  // evt.currentTarget.reset();

  //event.target.reset();
}

//compareArray(countries);
function compareArray(countries) {
  if (countries.length > 10) {
    //countryList.innerHTML = '';
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );

    // return Notiflix.Notify.failure(`Rejected promise  in ms`);
  } else if (countries.length > 2 && countries.length < 10) {
    // countryList.innerHTML = '';
    renderCountriesList(countries);
  }

  //   (countries.length === 1)
  //;
  else renderCountriesInfo(countries);
}

function renderCountriesInfo(countries) {
  // countryList.innerHTML = '';
  const { flags, name, capital, population, languages } = countries[0];

  return (countryInfo.innerHTML = `<ul class=country-title>
    <img src="${flags.svg}" alt="flag" width="60">
            <h2>${name.official}</h2></ul>
             <ul><li><h3>Capital: ${capital}</h3></li>
            <li><h3>Population: ${population}</h3></li>
            <li><h3>Languages: ${Object.values(languages)}</h3></li>
             </ul>`);
}

function renderCountriesList(countries) {
  //  countryList.innerHTML = '';
  const markup = countries
    .map(country => {
      return `<li>
        <img class="picture" src="${country.flags.svg}" alt="flag" width="60">
                <h3>${country.name.official}</h3>
              
              </li>
          `;
    })
    .join('');
  countryList.innerHTML = markup;
}
