let pending = 1;
let completed = 0;

const btn = document.querySelector(".button-29");
const d = new Date();
const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
const year=d.getFullYear();
const month=d.getMonth();
const date = d.getDate();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = weekday[d.getDay()];

const checkbox = document.querySelector(".checkbox-container input");
const task = document.querySelector(".tasks");


const taskCompleted = () => {
    task.style.display = "none";
    pending--;
    completed++;
    document.querySelector("#task-pending").innerText = `Task Pending: ${pending}`;
    document.querySelector("#task-completed").innerText = `Task Completed: ${completed}`;
}

checkbox.addEventListener('click',(evt)=>{
        evt.preventDefault();
        taskCompleted();
});
// btn.addEventListener("click",(evt) => {
//     evt.preventDefault();
//     addTask();
// })

// const addTask = () => {
    
// }
document.querySelector('.button-29').addEventListener('click', function(event) {
    const taskInputDiv = document.getElementById('task-input');
    const overlay = document.getElementById('overlay');
    
    const rect = event.target.getBoundingClientRect();
    taskInputDiv.style.top = rect.bottom + 'px';
    taskInputDiv.style.left = rect.left + 'px';

    taskInputDiv.style.display = 'block';
    overlay.style.display = 'block';
});


const setDate = () => {
    document.querySelector("#day-date").textContent = `${day}, ${date} ${monthNames[month]} ${year}`;
}
setDate();

// const userName = () => {
//     const user = prompt("Enter your user-name");
//     if (user) {
//         document.querySelector("#offcanvasDarkNavbarLabel").innerText=user;
//     }
// }
// userName();