import './css/styles.css';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 1000;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

let userText;

searchBox.addEventListener('input', event => {
  event.preventDefault();
  userText = event.currentTarget.value;
  fetchCountries(userText)
    .then(countries => renderCountriesList(countries))
    //.then(countries => console.log(countries));

    .catch(error => console.log('error rfrkq'));
  //event.target.reset();
});

// console.log(userText);
// const countrytest = 'peru';
//?fields=name,capital,currencies

//function fetchCountries(name)

function renderCountriesList(countries) {
  console.log(countries);
  console.log(777);
  const markup = countries
    .map(countrie => {
      return `<li>
                <p><b>Name</b>:${countrie.name.official}</p>
                <p><b>Email</b>: ${countrie.capital}</p>
                <p><b>Email</b>: ${countrie.languages}</p>
              </li>
          `;
    })

    .join('');
  // countryList.insertAdjacentHTML = markup;
  countryList.innerHTML = markup;
  // console.log(markup);
}

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
