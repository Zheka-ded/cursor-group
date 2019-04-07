// Реализовать функцию из задачи №3 (bombTimer) с помощью рекурсии и setTimeout.


function bombTimer(str, time, timeInterval) {
	if (time !== 0) {
		let timer = setTimeout(() => {
			console.log(time);
			clearTimeout(timer);
			bombTimer(str, time - 1, timeInterval);
		}, timeInterval);
	} else if (time === 0) {
		let stringDelay = setTimeout(() => {
			clearTimeout(stringDelay);
			console.log(str);
		}, timeInterval);
	}
	return str;
}
bombTimer('Booom!', 3, 1000);