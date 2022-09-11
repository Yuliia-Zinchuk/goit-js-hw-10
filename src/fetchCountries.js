const fieldsParam = 'fields=name,capital,population,flags,languages';
export function fetchCountries(searchCountry) {
  return fetch(
    `https://restcountries.com/v3.1/name/${searchCountry}?${fieldsParam}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
