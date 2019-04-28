

/*

const input = document.getElementById(`inputID`);
let inputValue = ``;
input.addEventListener(`input`, () => {
    inputValue = input.value;
    if(inputValue.toLowerCase() === `iold` || inputValue.toLowerCase() === `tosha`) {
        input.style = `border-radius: 5px; border: 3px solid lawngreen; padding: 3px;`;
    } else{
        input.style = `border-radius: 15px; border: 4px solid darkred; padding-left: 5px;`;
    }
});








const start = document.getElementById(`startID`);

console.log(`start: `, start);
console.dir(start);

// start.addEventListener(`mouseover`, () => {
//     start.style = `background-color: green;`;
// });

// start.addEventListener(`mouseout`, () => {
//     start.style = `background-color: rgb(8, 236, 149);`;
// });

// start.addEventListener(`mousedown`, () => {
//     start.style = `background-color: yellow;`;
// });

// start.addEventListener(`mouseup`, () => {
//     start.style = `background-color: blue;`;
// });

start.addEventListener(`click`, function() {
    start.textContent = `GO!!!`;
    start.style = `width: 80px; height: 80px; padding: 0px; border-radius: 40px;`;
    // start.style = 

    gameStart();

}, { once: true } );





    function moveStart (event) {
        const { x, y } = event;
        start.style.left = x + `px`;
        start.style.top = y + `px`;
    };



// function gameStart () {
//     let stepDown = 1;
//     let stepUp = 1;
//     start.addEventListener(`mousedown`, function () {
//         console.log(`mousedown: `, stepDown++);
//         document.addEventListener(`mousemove`, moveStart);
//     });

//     document.addEventListener(`mouseup`, function () {
//         console.log(`mouseup: `, stepUp++);
//         document.removeEventListener(`mousemove`, moveStart);
//     });
    
//     // document.addEventListener(`mousemove`, function (event) {
//     //     const { x, y } = event;
//     //     // const x = event.x;
//     //     // const y = event.y;
//     //     start.style.left = x + `px`;
//     //     start.style.top = y + `px`;
//     //     // console.log(event);
//     //     // if(x > 10) {
//     //     //     start.style.left = x + `px`;
//     //     // }
//     //     // if(y > 10) {
//     //     //     start.style.top = y + `px`;
//     //     // }
//     // });

// }





function gameStart () {
    start.addEventListener(`mousedown`, function () {
        document.addEventListener(`mousemove`, moveStart);
    });

    document.addEventListener(`mouseup`, function () {
        document.removeEventListener(`mousemove`, moveStart);
    });

    document.addEventListener(`click`, moveStart);
}



*/










































// скрипт на инпут

const input = document.getElementById(`inputID`);
let inputValue = ``;
input.addEventListener(`input`, () => {
    inputValue = input.value;
    if(inputValue.toLowerCase() === `iold` || inputValue.toLowerCase() === `tosha`) {
        input.style = `border-radius: 5px; border: 3px solid lawngreen; padding: 3px;`;
    } else{
        input.style = `border-radius: 15px; border: 4px solid darkred; padding-left: 5px;`;
    }
});


// скрипт на старт

const start = document.getElementById(`startID`);

// start.addEventListener(`click`, function() {
//     start.textContent = `GO!!!`;
//     start.style = `width: 80px; height: 80px; padding: 0px; border-radius: 40px;`;
//     // start.style = 

//     gameStart();

// }, { once: true } );



start.addEventListener(`click`, () => {
    start.textContent = `GO!!!`;
    start.style = `width: 80px; height: 80px; padding: 0px; border-radius: 40px;`;
    // start.style = 

    gameStart();

}, { once: true } );


// // функция на позиционирование кнопки
// function moveStart (event) {
//     const { x, y } = event;
//     start.style.left = x + `px`;
//     start.style.top = y + `px`;
// };


// функция на позиционирование кнопки
let moveStart = (event) => {
    const { x, y } = event;
    start.style.left = x + `px`;
    start.style.top = y + `px`;
};

// // скрипт на стрелочки
// function moveStartKeys (event) {
//     console.log(`event: `, event.keyCode);
//     if(event.keyCode === 37) {
//         start.style.left = (start.offsetLeft - 15) +  `px`;
//     } else if(event.keyCode === 38) {
//         start.style.top = (start.offsetTop - 15) +  `px`;
//     } else if(event.keyCode === 39) {
//         start.style.left = (start.offsetLeft + 15) +  `px`;
//     } else if(event.keyCode === 40) {
//         start.style.top = (start.offsetTop + 15) +  `px`;
//     }
// };

// скрипт на стрелочки
let moveStartKeys = (event) => {
    console.log(`event: `, event.keyCode);
    if(event.keyCode === 37) {
        moveStart({x: start.offsetLeft - 15})
    } else if(event.keyCode === 38) {
        moveStart({y: start.offsetTop - 15})
    } else if(event.keyCode === 39) {
        moveStart({x: start.offsetLeft + 15})
    } else if(event.keyCode === 40) {
        moveStart({y: start.offsetTop + 15})
    }
};


// // скрипт на курсор
// function gameStart () {

//     start.addEventListener(`mousedown`, function () {
//         document.addEventListener(`mousemove`, moveStart);
//     });

//     document.addEventListener(`mouseup`, function () {
//         document.removeEventListener(`mousemove`, moveStart);
//     });

//     document.addEventListener(`click`, moveStart);

//     start.addEventListener(`keydown`, moveStartKeys);
// }


// скрипт на курсор
let gameStart = () => {

    start.addEventListener(`mousedown`, function () {
        document.addEventListener(`mousemove`, moveStart);
    });

    document.addEventListener(`mouseup`, function () {
        document.removeEventListener(`mousemove`, moveStart);
    });

    document.addEventListener(`click`, moveStart);

    start.addEventListener(`keydown`, moveStartKeys);
}
