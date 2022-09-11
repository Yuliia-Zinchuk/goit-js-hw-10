const e=document.querySelector("#search-box");document.querySelector("#country-list");let t;e.addEventListener("input",(e=>{t=e.currentTarget.value,fetch(`https://restcountries.com/v3.1/name/${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>console.log(e))).catch((e=>console.log("error")))}));
//# sourceMappingURL=index.b904d3e5.js.map
