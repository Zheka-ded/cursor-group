// button code definition
document.addEventListener(`keydown`, function (event) {
    // console.log(`event: `, event.keyCode);
    document.querySelector('.keyCode').innerHTML = `Код кнопки: ` + event.keyCode;
});

// const buttons
const keyA = document.querySelector(`.keyA`);
const keyS = document.querySelector(`.keyS`);
const keyD = document.querySelector(`.keyD`);
const keyF = document.querySelector(`.keyF`);
const keyG = document.querySelector(`.keyG`);
const keyH = document.querySelector(`.keyH`);
const keyJ = document.querySelector(`.keyJ`);
const keyK = document.querySelector(`.keyK`);

// const keys sounds
const keyASound = new Audio(`sounds/1.mp3`);
const keySSound = new Audio(`sounds/2.mp3`);
const keyDSound = new Audio(`sounds/3.mp3`);
const keyFSound = new Audio(`sounds/4.mp3`);
const keyGSound = new Audio(`sounds/5.mp3`);
const keyHSound = new Audio(`sounds/6.mp3`);
const keyJSound = new Audio(`sounds/7.mp3`);
const keyKSound = new Audio(`sounds/8.mp3`);


// key press
document.addEventListener(`keydown`, function ( {keyCode} ) {
    if(keyCode === 65) {
        keyA.classList.add(`activeKey`);
        keyASound.play();
    }
    if(keyCode === 83) {
        keyS.classList.add(`activeKey`);
        keySSound.play();
    }
    if(keyCode === 68) {
        keyD.classList.add(`activeKey`);
        keyDSound.play();
    }
    if(keyCode === 70) {
        keyF.classList.add(`activeKey`);
        keyFSound.play();
    }
    if(keyCode === 71) {
        keyG.classList.add(`activeKey`);
        keyGSound.play();
    }
    if(keyCode === 72) {
        keyH.classList.add(`activeKey`);
        keyHSound.play();
    }
    if(keyCode === 74) {
        keyJ.classList.add(`activeKey`);
        keyJSound.play();
    }
    if(keyCode === 75) {
        keyK.classList.add(`activeKey`);
        keyKSound.play();
    }
});

document.addEventListener(`keyup`, function ( {keyCode} ) {
    if(keyCode === 65) {
        keyA.classList.remove(`activeKey`);
    }
    if(keyCode === 83) {
        keyS.classList.remove(`activeKey`);
    }
    if(keyCode === 68) {
        keyD.classList.remove(`activeKey`);
    }
    if(keyCode === 70) {
        keyF.classList.remove(`activeKey`);
    }
    if(keyCode === 71) {
        keyG.classList.remove(`activeKey`);
    }
    if(keyCode === 72) {
        keyH.classList.remove(`activeKey`);
    }
    if(keyCode === 74) {
        keyJ.classList.remove(`activeKey`);
    }
    if(keyCode === 75) {
        keyK.classList.remove(`activeKey`);
    }
});


// click mouse
keyA.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keyASound.play();
});

keyA.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});

keyS.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keySSound.play();
});

keyS.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});

keyD.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keyDSound.play();
});

keyD.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});

keyF.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keyFSound.play();
});

keyF.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});

keyG.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keyGSound.play();
});

keyG.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});

keyH.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keyHSound.play();
});

keyH.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});

keyJ.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keyJSound.play();
});

keyJ.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});

keyK.addEventListener(`mousedown`, function () {
    this.classList.add(`activeKey`);
    keyKSound.play();
});

keyK.addEventListener(`mouseup`, function () {
    this.classList.remove(`activeKey`);
});