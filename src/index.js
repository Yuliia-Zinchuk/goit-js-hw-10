import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');
const countryList = document.querySelector('#country-list');

let userText;

searchBox.addEventListener('input', event => {
  userText = event.currentTarget.value;
  fetchCountries(userText)
    .then(countries => console.log(countries))
    .catch(error => console.log('error'));
});

// console.log(userText);
// const countrytest = 'peru';
//?fields=name,capital,currencies

function fetchCountries(name) {
  return fetch(`https://restcountries.com/v3.1/name/${userText}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

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
