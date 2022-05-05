let searchImg = async (val) => {
  let res = await fetch(
    `https://api.unsplash.com//search/photos/?query=${val}&per_page=20&client_id=0nBcWWEH271xvtYj1MKQjieVcUl6vNwldmR4qe0DzHM`
  );
  let data = await res.json();
  return data;
  console.log(data);
};
function append({ results }, container) {
  container.innerHTML = "";
  results.forEach(({ alt_description, urls: { small } }) => {
    let div = document.createElement("div");
    div.classList.add("sm");
    let img = document.createElement("img");
    img.src = small;

    let p = document.createElement("p");
    p.innerText = alt_description;
    div.append(img, p);
    container.append(div);
  });
}
export { searchImg, append };
