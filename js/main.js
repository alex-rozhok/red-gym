// timetable
function timetableShow() {
	event.preventDefault();
	for(clickDay of clickDays) {
			clickDay.classList.remove('days__link--active')
		}
	let timetables = document.querySelectorAll('.timetable__list');

	for(let timetable of timetables){
		timetable.classList.remove('timetable__list--show');
		let day = timetable.dataset.day;
		let actionDay = this.innerHTML;
		if (day==actionDay){
			timetable.classList.add('timetable__list--show');
		}
	}
	this.classList.add('days__link--active')
}

let clickDays = document.querySelectorAll('.days__link');

for (let clickDay of clickDays) {
	clickDay.addEventListener('click', timetableShow)
}


//--- calendar

let recommend =['trx', 'stretching', 'zumba', 'hard mix', 'crossfit','body sculpt', 'yoga'];
let calendarWeek = document.querySelectorAll('.week')	;
let allDays = document.querySelectorAll('.calendar-day__link')	;
let recommendTraining = document.querySelector('.name-training');
		for(let week of calendarWeek){
			let calendarDays =week.querySelectorAll('.calendar-day__link');

		calendarDays.forEach(function(day, index){

			day.addEventListener('click',function(){
				event.preventDefault();

				for(let day of allDays){
						day.classList.remove('calendar-day__link--active');
					}

				this.classList.add('calendar-day__link--active');
				console.log(index);
				recommendTraining.innerHTML = recommend[index];
				let activeDay = document.querySelector('.active-day');
				activeDay.innerHTML = this.innerHTML;
				})
		})
}

// arrow up




    function arrowShow () {
          	let scroll = document.documentElement.scrollTop;

          	if (scroll > 400) {
          		    arrowUp.classList.remove('d-none')
          	}
            else {
        		      arrowUp.classList.add('d-none')
        	}
    }
	 let arrowUp = document.querySelector('.scroll-up');
	  window.addEventListener('scroll', arrowShow);

  arrowUp.addEventListener('click', ()=>{
        document.documentElement.scrollTo(0,0)
  })





// modal

let elem = document.createElement('div');
elem.style.overflowY = 'scroll';
elem.style.width = '50px';
elem.style.height = '50px';
document.body.append(elem);
let scrollWidth = elem.offsetWidth - elem.clientWidth;
elem.remove();

let signBtnOpenModal = document.querySelector('.sign-up__btn');
let joinBtnOpenModal =  document.querySelector('.join-btn');
let closeModal = document.querySelector('.registration-form__close-btn');
let modalWindow = document.querySelector('.registration-form-wrapper');

function showModal() {
	event.preventDefault();
	modalWindow.classList.remove('d-none');
	arrowUp.classList.add('d-none')
	document.body.style.cssText += `overflow:hidden;padding:0 ${scrollWidth}px 0 0;`;
				closeModal.addEventListener('click', hiddenModal);

}

function hiddenModal(){
	modalWindow.classList.add('d-none');
	document.body.style.cssText += 'overflow:auto;padding:0;';
	arrowShow ();
			}

signBtnOpenModal.addEventListener('click', showModal);
joinBtnOpenModal.addEventListener('click', showModal);


//---reload

window.onload=function(){
  let preload = document.querySelector('.preload');
  preload.style.display="none";
    document.body.classList.remove('hidden');
}
