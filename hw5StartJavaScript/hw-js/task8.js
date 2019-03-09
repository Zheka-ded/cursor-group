// A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive. //

// function cursorCheck(str) { /* your code */ }
// cursorCheck('Hello I am OstaP') // true
// cursorCheck('Superman is here') // false

// // рабочий но чуть не то что нужно //

// let who = prompt(`Who?`, ``);

// if (who === `ironman` || who === `cursor` || who === `ostap`) {
//     alert('Hello I am OstaP'); // true
// }   else{
//         alert('Superman is here'); // false
//     }

// не знаю который код правильный, оба рабочие //

// это тоже рабочий и он тоже без игнора регистра //

// function cursorCheck(str) { 
//     if (str === `ironman` || str === `cursor` || str === `ostap`) {
//         return true;
//     }   else {
//         return alert('Superman is here');
//     }
//  }

//  let str = prompt(`Who?`);

//  if (cursorCheck(str)) {
//     alert('Hello I am OstaP');
//  }


//  console.log(cursorCheck('Hello I am OstaP'));
//  console.log(cursorCheck('Superman is here'));



// cursorCheck('Hello I am OstaP') // true
// cursorCheck('Superman is here') // false

// let str = [`ironman`, `cursor`, `ostap`];

//  function cursorCheck(str) {
//     if (str === `ironman`) {
//         return true;
//     } else if (str === `cursor`) {
//         return true;
//     } else if (str === `ostap`) {
//         return true;
//     } else{
//         return false;
//     }
//  }

//  let str = prompt(`Who?`);

//  if (cursorCheck(str)) {
//     alert('Hello I am OstaP');
//  }