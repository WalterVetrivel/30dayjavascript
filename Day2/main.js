let now = new Date().toLocaleTimeString().split(' ')[0];

const time = now.split(':');
let secondsDegrees = (parseInt(time[2]) * 6) % 360;
let minutesDegrees = (parseInt(time[1]) * 6 + parseInt(time[2]) * 0.1) % 360;
let hoursDegrees =
	(parseInt(time[0]) * 30 +
		parseInt(time[1]) * 0.5 +
		parseInt(time[2]) * (1 / 120)) %
	360;

const secondsHand = document.querySelector('.seconds_hand');
const minutesHand = document.querySelector('.minutes_hand');
const hoursHand = document.querySelector('.hours_hand');

secondsHand.setAttribute('style', `transform: rotate(${secondsDegrees}deg)`);
minutesHand.setAttribute('style', `transform: rotate(${minutesDegrees}deg)`);
hoursHand.setAttribute('style', `transform: rotate(${hoursDegrees}deg)`);

setInterval(() => {
	secondsDegrees = (secondsDegrees + 6) % 360;
	minutesDegrees = (minutesDegrees + 0.1) % 360;
	hoursDegrees = (hoursDegrees + 1 / 120) % 360;

	secondsHand.setAttribute('style', `transform: rotate(${secondsDegrees}deg)`);
	minutesHand.setAttribute('style', `transform: rotate(${minutesDegrees}deg)`);
	hoursHand.setAttribute('style', `transform: rotate(${hoursDegrees}deg)`);
}, 1000);
