import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 1000;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
console.dir(searchBox);
let userText;

//const returnedFunction = debounce(onSearch(), 500);

//window.addEventListener('resize', returnedFunction);

searchBox.addEventListener('input', onSearch, 500);

//searchBox.addEventListener('input', debounce(onSearch), 5000);

// Функция, которую мы хотим «откладывать»:

function onSearch(evt) {
  evt.preventDefault();
  userText = evt.currentTarget.value;

  fetchCountries(userText)
    // .then(countries => renderCountriesList(countries)) ///может без параметров
    .then(renderCountriesList) ///это без параметров
    //.then(countries => console.log(countries));

    .catch(error => console.log('error rfrkq'));
  //  .finally(() => evt.currentTarget.reset());
  // evt.currentTarget.reset();

  //event.target.reset();
}

// console.log(userText);
// const countrytest = 'peru';
//?fields=name,capital,currencies

//function fetchCountries(name)

function renderCountriesList(countries) {
  console.log(countries);

  console.log(countries.length);
  if (countries.length > 10) {
    return Notiflix.Notify.failure(`Rejected promise  in ms`);
  } else if ((countries.length > 2) & (countries.length < 10)) {
    console.log(12345);

    const markup = countries
      .map(countrie => {
        return `<li>
        <img class="picture" src="${countrie.flags.svg}" alt="flag" width="60">
                <h3>${countrie.name.official}</h3>
              
              </li>
          `;
      })

      .join('');
    // countryList.insertAdjacentHTML = markup;
    countryList.innerHTML = markup;
  }
  // console.log(markup);
}

//   <p><b>Email</b>: ${countrie.capital}</p>
//                 <p><b>Email</b>: ${countrie.languages}</p>

//  <p>
//    <b>Name</b>:${countrie.area}
//  </p>;

// console.log(countrie);
// const listCountries = fetch(`https://restcountries.com/v3.1/name/peru`)
//   .then(response => {
//     //console.log(response.json());
//     return response.json();
//   })
//   .then(country => {
//     console.log(country);
//       return country;

//-----
// console.log(capital);
// const markupTest = country
//   .map(country => {
//     return `<li>

//       <p><b>Email</b>: ${country.population}</p>
//       <p><b>Company</b>: ${country.capital}</p>
//     </li>`;
//   })
//   .join('');
// countryList.insertAdjacentHTML('afterbegin', markupTest);

///------
//   })
//   .then(country => {
//     console.log(this.region);
//   })
//   .catch(error => {
//     console.log(error);
//   });
// //console.log(listCountries);

//   const markup = countries
//     .map(country => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   countryList.innerHTML = markup;

// const fetchUsersBtn = document.querySelector('.btn');
// const userList = document.querySelector('.user-list');

// fetchUsersBtn.addEventListener('click', () => {

// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

//function renderCountriesList(countries) {

//}

//   const markup = countries
//     .map(country => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join('');
//   countryList.innerHTML = markup;
// }

// listCountries
//   .then(data => data.json())
//   .then(countries => {
//     console.log(countries);
//   })
//   .catch(error => {
//     console.log('error its mistake', error);
//   });
