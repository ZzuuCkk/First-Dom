// N1
const btnSelect = document.querySelector(".btn");


    btnSelect.addEventListener("click",(e) => {
    btnSelect.remove();
});

// N2

const imgTagInset = document.createElement("img");
imgTagInset.setAttribute("src","https://fastly.picsum.photos/id/405/1400/800.jpg?hmac=4CRI7OpfDWtP4EydVd4Z-1NKSGhBmpZq8OaEXVu3be8");
imgTagInset.setAttribute("alt","street");
btnSelect.insertAdjacentElement("afterend" , imgTagInset);




