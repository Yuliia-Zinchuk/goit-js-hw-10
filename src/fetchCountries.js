export function fetchCountries(userText) {
  return fetch(
    `https://restcountries.com/v3.1/name/${userText}?fields=name,capital,population,flags,languages`
  ).then(
    //return fetch(`https://restcountries.com/v3.1/name/${userText}`).then(  &fields=name,capital,population,flags,languages
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
