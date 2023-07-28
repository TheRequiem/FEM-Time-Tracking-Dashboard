import data from "./data.json";

const dailyButton = document.getElementById('daily');
const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');
const type = document.getElementsByClassName('type');
const workCurrent = document.getElementById('work-current');
const workPrev = document.getElementById('work-prev');
const playCurrent = document.getElementById('play-current');
const playPrev = document.getElementById('play-prev');
const studyCurrent = document.getElementById('study-current');
const studyPrev = document.getElementById('study-prev');
const excerciseCurrent = document.getElementById('excercise-current');
const excercisePrev = document.getElementById('excercise-prev');
const socialCurrent = document.getElementById('social-current');
const socialPrev = document.getElementById('social-prev');
const selfCareCurrent = document.getElementById('self-care-current');
const selfCarePrev = document.getElementById('self-care-prev');

dailyButton.addEventListener('click', ()=> {
  dailyButton.style.color = "white";
  weeklyButton.style.color = "var(--clr-neutral-pale-blue)";
  monthlyButton.style.color = "var(--clr-neutral-pale-blue)";
  for (var i = 0; i < type.length; i++) {
    type[i].innerHTML = "Yesterday -";    
  }
  data[0].timeframes.daily.current == 1 ? workCurrent.innerHTML = data[0].timeframes.daily.current + "hr":  workCurrent.innerHTML = data[0].timeframes.daily.current + "hrs";
  data[0].timeframes.daily.previous == 1 ? workPrev.innerHTML = data[0].timeframes.daily.previous + "hr":  workPrev.innerHTML = data[0].timeframes.daily.previous + "hrs";
  data[1].timeframes.daily.current == 1 ? playCurrent.innerHTML = data[1].timeframes.daily.current + "hr":  playCurrent.innerHTML = data[1].timeframes.daily.current + "hrs";
  data[1].timeframes.daily.previous == 1 ? playPrev.innerHTML = data[1].timeframes.daily.previous + "hr":  playPrev.innerHTML = data[1].timeframes.daily.previous + "hrs";
  data[2].timeframes.daily.current == 1 ? studyCurrent.innerHTML = data[2].timeframes.daily.current + "hr": studyCurrent.innerHTML = data[2].timeframes.daily.current + "hrs"; 
  data[2].timeframes.daily.previous == 1 ? studyPrev.innerHTML = data[2].timeframes.daily.previous + "hr": studyPrev.innerHTML = data[2].timeframes.daily.previous + "hrs";
  data[3].timeframes.daily.current == 1 ? excerciseCurrent.innerHTML = data[3].timeframes.daily.current + "hr": excerciseCurrent.innerHTML = data[3].timeframes.daily.current + "hrs";
  data[3].timeframes.daily.previous == 1 ? excercisePrev.innerHTML = data[3].timeframes.daily.previous + "hr": excercisePrev.innerHTML = data[3].timeframes.daily.previous + "hrs";
  data[4].timeframes.daily.current == 1 ? socialCurrent.innerHTML = data[4].timeframes.daily.current + "hr": socialCurrent.innerHTML = data[4].timeframes.daily.current + "hrs";
  data[4].timeframes.daily.previous == 1 ? socialPrev.innerHTML = data[4].timeframes.daily.previous + "hr": socialPrev.innerHTML = data[4].timeframes.daily.previous + "hrs";
  data[5].timeframes.daily.current == 1 ? selfCareCurrent.innerHTML = data[5].timeframes.daily.current + "hr": selfCareCurrent.innerHTML = data[5].timeframes.daily.current + "hrs";
  data[5].timeframes.daily.previous == 1 ? selfCarePrev.innerHTML = data[5].timeframes.daily.previous + "hr": selfCarePrev.innerHTML = data[5].timeframes.daily.previous + "hrs";
})

weeklyButton.addEventListener('click', ()=> {
  dailyButton.style.color = "var(--clr-neutral-pale-blue)";
  weeklyButton.style.color = "white";
  monthlyButton.style.color = "var(--clr-neutral-pale-blue)";
  for (var i = 0; i < type.length; i++) {
    type[i].innerHTML = "Last Week - ";
  }
  data[0].timeframes.weekly.current == 1 ? workCurrent.innerHTML = data[0].timeframes.weekly.current + "hr":  workCurrent.innerHTML = data[0].timeframes.weekly.current + "hrs";
  data[0].timeframes.weekly.previous == 1 ? workPrev.innerHTML = data[0].timeframes.weekly.previous + "hr":  workPrev.innerHTML = data[0].timeframes.weekly.previous + "hrs";
  data[1].timeframes.weekly.current == 1 ? playCurrent.innerHTML = data[1].timeframes.weekly.current + "hr":  playCurrent.innerHTML = data[1].timeframes.weekly.current + "hrs";
  data[1].timeframes.weekly.previous == 1 ? playPrev.innerHTML = data[1].timeframes.weekly.previous + "hr":  playPrev.innerHTML = data[1].timeframes.weekly.previous + "hrs";
  data[2].timeframes.weekly.current == 1 ? studyCurrent.innerHTML = data[2].timeframes.weekly.current + "hr": studyCurrent.innerHTML = data[2].timeframes.weekly.current + "hrs"; 
  data[2].timeframes.weekly.previous == 1 ? studyPrev.innerHTML = data[2].timeframes.weekly.previous + "hr": studyPrev.innerHTML = data[2].timeframes.weekly.previous + "hrs";
  data[3].timeframes.weekly.current == 1 ? excerciseCurrent.innerHTML = data[3].timeframes.weekly.current + "hr": excerciseCurrent.innerHTML = data[3].timeframes.weekly.current + "hrs";
  data[3].timeframes.weekly.previous == 1 ? excercisePrev.innerHTML = data[3].timeframes.weekly.previous + "hr": excercisePrev.innerHTML = data[3].timeframes.weekly.previous + "hrs";
  data[4].timeframes.weekly.current == 1 ? socialCurrent.innerHTML = data[4].timeframes.weekly.current + "hr": socialCurrent.innerHTML = data[4].timeframes.weekly.current + "hrs";
  data[4].timeframes.weekly.previous == 1 ? socialPrev.innerHTML = data[4].timeframes.weekly.previous + "hr": socialPrev.innerHTML = data[4].timeframes.weekly.previous + "hrs";
  data[5].timeframes.weekly.current == 1 ? selfCareCurrent.innerHTML = data[5].timeframes.weekly.current + "hr": selfCareCurrent.innerHTML = data[5].timeframes.weekly.current + "hrs";
  data[5].timeframes.weekly.previous == 1 ? selfCarePrev.innerHTML = data[5].timeframes.weekly.previous + "hr": selfCarePrev.innerHTML = data[5].timeframes.weekly.previous + "hrs";
})

monthlyButton.addEventListener('click', ()=> {
  dailyButton.style.color = "var(--clr-neutral-pale-blue)";
  weeklyButton.style.color = "var(--clr-neutral-pale-blue)";
  monthlyButton.style.color = "white";
  for (var i = 0; i < type.length; i++) {
    type[i].innerHTML = "Last Month - ";
  }
  data[0].timeframes.monthly.current == 1 ? workCurrent.innerHTML = data[0].timeframes.monthly.current + "hr":  workCurrent.innerHTML = data[0].timeframes.monthly.current + "hrs";
  data[0].timeframes.monthly.previous == 1 ? workPrev.innerHTML = data[0].timeframes.monthly.previous + "hr":  workPrev.innerHTML = data[0].timeframes.monthly.previous + "hrs";
  data[1].timeframes.monthly.current == 1 ? playCurrent.innerHTML = data[1].timeframes.monthly.current + "hr":  playCurrent.innerHTML = data[1].timeframes.monthly.current + "hrs";
  data[1].timeframes.monthly.previous == 1 ? playPrev.innerHTML = data[1].timeframes.monthly.previous + "hr":  playPrev.innerHTML = data[1].timeframes.monthly.previous + "hrs";
  data[2].timeframes.monthly.current == 1 ? studyCurrent.innerHTML = data[2].timeframes.monthly.current + "hr": studyCurrent.innerHTML = data[2].timeframes.monthly.current + "hrs"; 
  data[2].timeframes.monthly.previous == 1 ? studyPrev.innerHTML = data[2].timeframes.monthly.previous + "hr": studyPrev.innerHTML = data[2].timeframes.monthly.previous + "hrs";
  data[3].timeframes.monthly.current == 1 ? excerciseCurrent.innerHTML = data[3].timeframes.monthly.current + "hr": excerciseCurrent.innerHTML = data[3].timeframes.monthly.current + "hrs";
  data[3].timeframes.monthly.previous == 1 ? excercisePrev.innerHTML = data[3].timeframes.monthly.previous + "hr": excercisePrev.innerHTML = data[3].timeframes.monthly.previous + "hrs";
  data[4].timeframes.monthly.current == 1 ? socialCurrent.innerHTML = data[4].timeframes.monthly.current + "hr": socialCurrent.innerHTML = data[4].timeframes.monthly.current + "hrs";
  data[4].timeframes.monthly.previous == 1 ? socialPrev.innerHTML = data[4].timeframes.monthly.previous + "hr": socialPrev.innerHTML = data[4].timeframes.monthly.previous + "hrs";
  data[5].timeframes.monthly.current == 1 ? selfCareCurrent.innerHTML = data[5].timeframes.monthly.current + "hr": selfCareCurrent.innerHTML = data[5].timeframes.monthly.current + "hrs";
  data[5].timeframes.monthly.previous == 1 ? selfCarePrev.innerHTML = data[5].timeframes.monthly.previous + "hr": selfCarePrev.innerHTML = data[5].timeframes.monthly.previous + "hrs";
})

console.log(data[2].timeframes.monthly.current + "hr");
