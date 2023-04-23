// N1
const btnSelect = document.querySelector(".btn");
const sectionSelect = document.querySelector("#images-list");
const myButton = document.querySelector("#seeMore");

const seeMore = document.getElementById("see")
    btnSelect.addEventListener("click",(e) => {
    btnSelect.remove();
});

// N2

const imgTagInset = document.createElement("img");
imgTagInset.setAttribute("src","https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8");
imgTagInset.setAttribute("alt","street");
btnSelect.insertAdjacentElement("afterend" , imgTagInset);
imgTagInset.classList.add("secondTask");


// N3 + N4


function renderResultJs() {
    const imagesFromJs = results.map((ress)=> {
        return `
            <div class="card">
                <div class="imgContainer">
                    <img  src="${ress.webImage.url}">
                </div>
                <div class="txt">
                    <h3>${ress.title}</h3>
                    <p class="longTitle"></p>
                </div>
                <div class="buttons">
                    <button class="green" id="seeMore">see more details</button>
                    <button class="pink">remove card</button>
                </div>
            </div>

        `;
    });
 
    console.log(imagesFromJs);
    sectionSelect.innerHTML = imagesFromJs.join("");

  }

  renderResultJs();


