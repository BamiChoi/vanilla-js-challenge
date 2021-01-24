const body = document.querySelector("body");

const IMG_NUMBER = 8;

function paintImg(randomImgNumber) {
    const img = new Image();
    img.src = `img/${randomImgNumber + 1}.jpeg`;
    img.classList.add("bg-Img");    
    body.appendChild(img);
}

function genNumber() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const randomNumber = genNumber();
    paintImg(randomNumber);
}

init();
