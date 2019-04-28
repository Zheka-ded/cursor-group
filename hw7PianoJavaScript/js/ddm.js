const open = document.getElementById(`openID`);

const menu = document.querySelector(`.menu`);

const menuClose = menu.querySelector(`.menu-close`);

open.addEventListener(`click`, () => {
    // menu.classList.add(`opened`);
    menu.classList.toggle(`opened`);
});

menuClose.addEventListener(`click`, () => {
    menu.classList.remove(`opened`);
});