// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Fetch current UTC time
    const utcTimeElement = document.getElementById('utcTime');
    const currentTimeUTC = new Date().toUTCString();
    utcTimeElement.textContent = currentTimeUTC;

    // Fetch current day of the week
    const currentDayElement = document.getElementById('currentDay');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    const currentDay = daysOfWeek[currentDayIndex];
    currentDayElement.textContent = currentDay;
});

/** creating button click show hide navbar **/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})