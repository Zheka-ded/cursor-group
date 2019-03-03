// console.log(`hi`);

// // let user = new Object();
let user = {
    name: `iOld`,
    age: 33,
    gender: `man`,
    lives: `Kyiv`,
    wasBornIn: `Konotop`,
    'likes dogs': true,
};

console.log(user.gender);
// let key = `loves wife`;
// user[key] = true;

// // user."likes cats" = true; // запись не правильная
// user[`likes cats`] = true;
// user.isAdmin = true;
// // delete user.lives;
// // delete user.gender;
// // delete user[`likes cats`];

// console.log(user);
// console.log(user[`likes dogs`]);
// console.log(user[`likes cats`]);
// // console.log(user.name, user.gender);
// // console.log(user.name); // выводит после значение после . 

let iOld = {
    age: 33,
    name: `Zheka`,
    gender: `man`,
    hi() {
        console.log(`hello ` + this.name)
    }
}
let n = `name`;
iOld.age
iOld.hi();
iOld[`hi`]();
// console.log(iOld.greet);


function hi() {
    console.log(`hi-hello ` + user.name);
}
hi();

let person = {
    name: `Bobbi`,
    age: 105,
    gender: `undefine`,

    greet: function () {
        return `hello, i m ` + this.name
    }
}
console.log(person.greet());

// let arr = [
//     [ `key`, `value`],
//     [ `x`, 100 ],
//     [ `y`, 200 ],
//     [ `usd`, 1 ],
//     [ `uan`, ]
// ]

let a = `hi`;
let b = `man`;
let c = ` `;
console.log(a+c+b);

let d = `5`;
let e = `3`;
console.log( +d + +e);