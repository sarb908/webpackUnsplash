//https://api.unsplash.com//search/photos/?query=${val}&per_page=20&client_id=0nBcWWEH271xvtYj1MKQjieVcUl6vNwldmR4qe0DzHM
import { navbar } from "../components/navbar.js";
import { searchImg, append } from "./fetch.js";
import filter from "./../components/filter.js";
let filt = document.querySelector("#filter");
let container = document.querySelector("#container");
let nav = document.querySelector("#navbar");
nav.innerHTML = navbar();
console.log(navbar());
let search = document.querySelector("#query");

search.addEventListener("keydown", imgs);
function imgs(e) {
  if (e.key == "Enter") {
    let val = search.value;
    searchImg(val).then((data) => append(data, container));
  }
}

let ids = document.querySelector("#categories").children;

for (let el of ids) {
  el.addEventListener("click", function () {
    let val = el.id;

    console.log(el);

    filt.innerHTML = filter();

    searchImg(val).then((data) => append(data, container));

    let stag = document.querySelector("select");

    stag.addEventListener("change", () => {
      let prop = stag.value;
      console.log(prop, val);
      container.innerHTML = "";
      fetch(
        `https://api.unsplash.com//search/photos/?query=${val}&per_page=20&order_by=${prop}&client_id=0nBcWWEH271xvtYj1MKQjieVcUl6vNwldmR4qe0DzHM`
      )
        .then((res) => res.json())
        .then((data) => append(data, container));
    });
  });
}
