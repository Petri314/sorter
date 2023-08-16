const prevMonthBtns = document.querySelectorAll(".prevMonthBtn");
const nextMonthBtns = document.querySelectorAll(".nextMonthBtn");
const currentMonthElements = document.querySelectorAll(".currentMonth");
const calendars = document.querySelectorAll(".calendar");

let currentCalendarIndex = 0;
calendars[currentCalendarIndex].classList.remove("hidden");

for (let i = 0; i < prevMonthBtns.length; i++) {
    prevMonthBtns[i].addEventListener("click", () => {
        calendars[currentCalendarIndex].classList.add("hidden");
        currentCalendarIndex = (currentCalendarIndex - 1 + calendars.length) % calendars.length;
        calendars[currentCalendarIndex].classList.remove("hidden");
        highlightCurrentDay(calendars[currentCalendarIndex]);
    });

    nextMonthBtns[i].addEventListener("click", () => {
        calendars[currentCalendarIndex].classList.add("hidden");
        currentCalendarIndex = (currentCalendarIndex + 1) % calendars.length;
        calendars[currentCalendarIndex].classList.remove("hidden");
        highlightCurrentDay(calendars[currentCalendarIndex]);
    });

    highlightCurrentDay(calendars[currentCalendarIndex]);
}

function highlightCurrentDay(calendar) {
    const currentDate = new Date();
    const days = calendar.querySelectorAll("ol li:not(.day-name)");
    
    for (let i = 0; i < days.length; i++) {
        if (days[i].textContent === currentDate.getDate().toString()) {
            days[i].classList.add("current-day");
        } else {
            days[i].classList.remove("current-day");
        }
    }
}
