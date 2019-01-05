let now = new Date();

let secondsDegrees = (now.getSeconds() * 6) % 360;
let minutesDegrees = (now.getMinutes() * 6 + now.getSeconds() * 0.1) % 360;
let hoursDegrees =
	(now.getHours() * 30 +
		now.getMinutes() * 0.5 +
		now.getSeconds() * (1 / 120)) %
	360;

const secondsHand = document.querySelector('.seconds_hand');
const minutesHand = document.querySelector('.minutes_hand');
const hoursHand = document.querySelector('.hours_hand');

secondsHand.style.transform = `rotate(${secondsDegrees}deg) translateX(-50%)`;
minutesHand.style.transform = `rotate(${minutesDegrees}deg) translateX(-50%)`;
hoursHand.style.transform = `rotate(${hoursDegrees}deg) translateX(-50%)`;

setInterval(() => {
	secondsDegrees = (secondsDegrees + 6) % 360;
	minutesDegrees = (minutesDegrees + 0.1) % 360;
	hoursDegrees = (hoursDegrees + 1 / 120) % 360;

	secondsHand.style.transform = `rotate(${secondsDegrees}deg) translateX(-50%)`;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg) translateX(-50%)`;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg) translateX(-50%)`;
}, 1000);
