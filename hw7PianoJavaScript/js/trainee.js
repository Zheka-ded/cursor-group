// // DOM BOM
// // DMYTRO IZYUK
// (function() {
//     let elem = document.getElementsByClassName(`title__text`);
//     let elemBody = document.getElementsByClassName(`body__wrap`);
//     console.log(elem);
//     console.log(elemBody);
// })();


// DOM BOM
// BOHDAN MURANETS

// const button = document.getElementByClassName(`btn`);

// // button.onclick = function() {
// //     console.log(`CLICK!!!`);
// // }

// button.addEventListener(`click`, function() {
//     console.log(`add event listenetr Class!`);
// });

// const buttonID = document.getElementById(`btnID`);

// buttonID.addEventListener(`click`, function() {
//     console.log(`Add Event Listener`);

// });

// buttonID.addEventListener(`click`, function() {
//     console.log(`cooooool!!!`);
// }, { once: true } );

// buttonID.addEventListener(`mouseup`, function() {
//     console.log(`Add!`);
// });
// buttonID.addEventListener(`mousedown`, function() {
//     console.log(`wtf? Event Listener`);
// });

// buttonID.addEventListener(`mouseover`, function() {
//     console.log(`hi!`);
// });

// document.addEventListener(`click`, function() {
//     document.getElementById(`title__text-demo`).innerHTML = `Hi man!`;
// });

// document.addEventListener(`click`, () => {
//     console.log(`click document`);
// }, {capture: true} );


// document.addEventListener(`mousedown`, () => {
//     console.log(`click document mousedown!`);
// }, {capture: true} );


/*
const buttonID = document.getElementById(`btnID`);

function onClick () {
    console.log(`add event listener onclick!`);
};

buttonID.addEventListener(`click`, onClick);

setTimeout(() => {
    console.log(`event listener "click" removed!`);
    buttonID.removeEventListener(`click`, onClick);
}, 5000);


buttonID.addEventListener(`mouseup`, function() {
    console.log(`Add!`);
});
*/


// buttonID.addEventListener(`mousedown`, function (event) {
//     console.log(`event: `, event);
//     event.stopPropagation();
//     // console.log(`clickMouseDown!`);
// }, {once: true});


// buttonID.addEventListener(`mousedown`, function (event) {
//     console.log(`event: `, event);
//     event.stopPropagation();
//     // console.log(`clickMouseDown!`);
// });

/*  Ниже три идентичных функции!!!

// setTimeout(() => {
//     buttonID.removeEventListener(`click`, onClick);
// }, 5000);

// setTimeout(() => {buttonID.removeEventListener(`click`, onClick);}, 5000);

// setTimeout(function () {
//     buttonID.removeEventListener(`click`, onClick);
// }, 5000);

*/

/*
const buttonID = document.getElementById(`btnID`);

// buttonID.addEventListener(`mousedown`, function (event) {
//     console.log(`event: `, event);
//     event.stopPropagation();
//     // console.log(`clickMouseDown!`);
// });

document.addEventListener(`mousedown`, () => {
    console.log(`click document mousedown!`);
});
*/




/*
const buttonID = document.getElementById(`btnID`);

buttonID.addEventListener(`click`, function(event) {
    console.log(`button click!`);
    event.stopPropagation();
    // event.stopPropagation(); -- stopPropagation это метод event который не дает событию идти дальше своей функции //
}, {capture: true});


buttonID.addEventListener(`click`, (event) => {
    console.log(`button click`);
    event.stopPropagation();
    event.preventDefault();
    // event.preventDefault(); --preventDefault это метод event который предотвращает срабатывание дефолтных действий для элемента //
}, true);

document.addEventListener(`click`, () => {
    console.log(`document click`);
});


// const link = document.querySelector(`a`);

// link.addEventListener(`click`, (event) => {
//     console.log(`link click`);
//     event.stopPropagation();
//     // event.preventDefault();
// });
*/


/*
const linkClass = document.querySelector(`.linkGoogle`);

linkClass.addEventListener(`click`, (event) => {
    console.log(`link class click`);
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
}, true);


linkClass.addEventListener(`click`, (event) => {
    console.log(`link class click 2222`);
    // event.stopPropagation();
    // event.preventDefault();
    // event.stopImmediatePropagation();
}, true);
*/

/*
const buttonClassBTN = document.querySelector(`.btn`);

buttonClassBTN.addEventListener(`mousedown`, () => {
    console.log(`!wOw! down`);
    // event.stopImmediatePropagation();
    // event.stopPropagation();
    // event.preventDefault();
});


buttonClassBTN.addEventListener(`click`, (event) => {
    // console.log(`!wOw!`);
    event.stopPropagation();
    // event.preventDefault();
});
*/



/*

const link = document.querySelector(`.linkGoogle`);

link.addEventListener(`click`, (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(`click link with event method ".preventDefault"`)
})

const buttonID = document.getElementById(`btnID`);

buttonID.addEventListener(`click`, (event) => {
    // event.stopPropagation();
    console.log(`click button ID`);
});

document.addEventListener(`click`, () => {
    console.log(`click document`);
});


const clickEvent = new Event(`click`, {bubbles: true});
// Самодельный ивент сработает на всех "click"

// const clickEvent = new Event(`click`);
// Самодельный ивент сработает только там где мы ему укажем //

document.addEventListener(`click`, () => {
    console.log(`click document`);
});


buttonID.dispatchEvent(clickEvent);
buttonID.dispatchEvent(clickEvent);

// const buttonClassBTN = document.querySelector(`.btn`);

// buttonClassBTN.dispatchEvent(clickEvent);

// buttonClassBTN.addEventListener(`click`, () => {
//     console.log(`!wOw! down`);
//     // event.stopImmediatePropagation();
//     // event.stopPropagation();
//     // event.preventDefault();
// });

*/





/*

// const buttonID = document.getElementById(`btnID`);

const input = document.getElementById(`inputID`);

let inputValue = ``;


input.addEventListener(`input`, (event) => {
    // console.log(`change`, event);
    console.log(`value`, input.value);
    inputValue = input.value;
    
    if(inputValue.toLowerCase() === `iold` || inputValue.toLowerCase() === `cursor`) {
        // input.style.border = `2px solid lawngreen`;
        input.style = `border-radius: 5px; border: 3px solid lawngreen; padding: 3px;`;
    } else{
        // input.style.border = `4px solid darkred`;
        input.style = `border-radius: 15px; border: 4px solid darkred; padding-left: 5px;`;
    }
});




// input.addEventListener(`blur`, () => {
//     console.log(`blur: `);
//     console.log(`inputValue: `, inputValue);
//     // console.log(`check`, inputValue === `cursor`);
//     console.log(`check`, inputValue.toLowerCase() === `cursor`);

//     if(inputValue.toLowerCase() === `cursor`) {
//         // input.style.border = `2px solid lawngreen`;
//         input.style = `border-radius: 5px; border: 3px solid lawngreen; padding: 3px;`;
//     } else{
//         // input.style.border = `4px solid darkred`;
//         input.style = `border-radius: 15px; border: 4px solid darkred; padding-left: 5px;`;
//     }
// });

*/




/*

const input = document.getElementById(`inputID`);
let inputValue = ``;
input.addEventListener(`input`, () => {
    console.log(`value`, input.value);
    inputValue = input.value;
    if(inputValue.toLowerCase() === `iold` || inputValue.toLowerCase() === `cursor`) {
        input.style = `border-radius: 5px; border: 3px solid lawngreen; padding: 3px;`;
    } else{
        input.style = `border-radius: 15px; border: 4px solid darkred; padding-left: 5px;`;
    }
});



document.addEventListener(`keydown`, () => {
    console.log(`keydovn =>`, event);
});

document.addEventListener(`keyup`, () => {
    console.log(`keyup!`, event);
});

document.addEventListener(`keypress`, () => {
    console.log(`!!!keypress!!!`, event);
});

*/




// const input = document.getElementById(`inputID`);

const buttonID = document.getElementById(`btnID`);
let stepClick = 1;

buttonID.addEventListener(`click`, function (event) {
    console.log(`this: `, this);
    console.log(`click: `, stepClick++);

    this.style = `background: red; text-transform: uppercase; color: grin; width: 50px; height: 35px;`;
    // input.style = `display: none;`;
    // правильнее будет чере .toggle
    if(input.style.display === `none`){
        input.style.display = ``;
    }   else{
        input.style.display = `none`;
    }
});

document.getElementById(`idBtn`).addEventListener(`click`, function (event) {console.log(`this: `, this);});
