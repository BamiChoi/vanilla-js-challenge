
const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
  }
  
  function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
  }

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const date = new Date;
    const hours = date.getHours();
    if (hours >= 5 && hours < 12) {
        greeting.innerText = `좋은 아침입니다, ${text}님.`;
    } else if (hours >= 12 && hours < 14) {
        greeting.innerText = `${text}님, 점심은 드셨나요?`;
    } else if (hours >= 14 && hours < 18) {
        greeting.innerText = `즐거운 오후 되세요, ${text}님.`;
    } else if (hours >= 18 && hours < 20) {
        greeting.innerText = `${text}님, 저녁은 드셨나요?`;
    } else {
        greeting.innerText = `좋은 밤 되세요. ${text}님.`;
    }
    
}
   
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        askForName()

    }else {
        paintGreeting(currentUser);
    }

}

function  init() {
    loadName();
}
init();

