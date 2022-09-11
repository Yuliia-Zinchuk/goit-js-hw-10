export function fetchCountries(userText) {
  return fetch(`https://restcountries.com/v3.1/name/${userText}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}
