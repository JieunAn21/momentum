const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greeting");

const USER_LS = "crrentUser",
SHOW_CN = "show";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    showName(currentValue);
    saveName(currentValue);
}

function showName(text){
    greeting.classList.add(SHOW_CN);
    form.classList.remove(SHOW_CN);
    greeting.innerHTML = `Hello ${text}`;
}

function askName(){
    form.classList.add(SHOW_CN);
    form.addEventListener("submit", handleSubmit);
    saveName();
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askName();
    } else{
        showName(currentUser);
    }
}

function init(){
    loadName();
}

init();