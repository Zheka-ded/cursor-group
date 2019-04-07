// Функция, которая принимает аргументы strи timeв секундах, затем каждую секунду она должна отсчитывать время от time до 0и выводить текущее время на консоль, когда время равно 0, она печатаетstr

function bombTimer(str, time) {
    let i = time;
    let timer = setInterval(function() {
        if (i == 0) clearInterval(timer);
        i--;
        if (time >= 1) {
            console.log(time);
            time--;
        } else {
            console.log(str);
        }
    }, 1000);
}

bombTimer('Boooom', 3)
