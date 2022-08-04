// select element
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const mints = document.querySelector('.mints');
const secs = document.querySelector('.secs');


// variables declaration 
let date;
let startTimer;

// calculate time 
const calcTime = () => {
	let timeTo = document.getElementById('select-datetime').value;

	if (timeTo !== '0'){
		date = new Date(timeTo).getTime();
		
		startTimer = setInterval(function (){
			const now = new Date().getTime();
			const distance = date - now; //distance between curr date and end date(in ms)

			// Time calculations for days, hours, minutes and seconds
			var calc_days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var calc_hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var calc_minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var calc_seconds = Math.floor((distance % (1000 * 60)) / 1000);


			// select element
			document.querySelector('.days').innerHTML = calc_days;
			document.querySelector('.hours').innerHTML = calc_hours;
			document.querySelector('.mints').innerHTML = calc_minutes;
			document.querySelector('.secs').innerHTML = calc_seconds;

		}, 1000);
	}
}

// stop function
function Stop (){
    clearInterval(startTimer);
	document.querySelector('.days').innerHTML = '00';
	document.querySelector('.hours').innerHTML = '00';
	document.querySelector('.mints').innerHTML = '00';
	document.querySelector('.secs').innerHTML = '00';
}












