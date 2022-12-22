import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  
`;
console.log(menu);

menu.forEach((menu) =>
  DOM.mainpage.insertAdjacentHTML(
    "beforeend",
    `
<div class="child">
<img class="img" src="${menu.IMG}"><img>
<h1>${menu.Name}</h1>
<h2 class="price">$${menu.Price}</h2>
</div>
`
  )
);

DOM.dessertbtn.addEventListener("click", function () {
  DOM.mainpage.innerHTML = "";
  DessertMenu();
});

function DessertMenu() {
  menu
    .filter((menu) => menu.Type === "Dessert")
    .forEach((menu) =>
      DOM.mainpage.insertAdjacentHTML(
        "beforeend",
        `
<div class="child">
<img class="img" src="${menu.IMG}"><img>
<h1>${menu.Name}</h1>
<h2 class="price">$${menu.Price}</h2>
</div>
`
      )
    );
}

setupCounter(document.querySelector("#counter"));
