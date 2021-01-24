const clockContainer = document.querySelector(".js-clock"),
       clockTitle = clockContainer.querySelector("h1");
const dateContainer = document.querySelector(".js-date"),
      dateTitle  = dateContainer.querySelector("h1");
  

function parseDay(dayNumber){
if(dayNumber === 0){
  return ("일")
} else if(dayNumber === 1){
  return ("월")
} else if(dayNumber === 2){
  return ("화")
}else if(dayNumber === 3){
  return ("수")
}else if(dayNumber === 4){
  return ("목")
}else if(dayNumber === 5){
  return ("금")
}else if(dayNumber === 6){
  return ("토")
}
}


function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateToday = date.getDate();
  const dayNumber = date.getDay();
  const day = parseDay(dayNumber);
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  dateTitle.innerText = `${year}년 ${month + 1}월 ${dateToday}일 ${day}요일`
}


function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();