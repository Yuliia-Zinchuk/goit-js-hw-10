!function(){var n=document.querySelector("#search-box"),t=document.querySelector(".country-list");n.addEventListener("input",(function(n){n.preventDefault(),n.currentTarget.value,fetch("https://restcountries.com/v3.1/all").then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return function(n){console.log(n),console.log(777);var e=n.map((function(n){return"<li>\n                <p><b>Name</b>:".concat(n.area,"</p>\n              </li>\n          ")})).join("");t.innerHTML=e}(n)})).catch((function(n){return console.log("error rfrkq")}))}))}();
//# sourceMappingURL=index.eb898379.js.map