const timer = document.getElementById("timer");

let sec = setInterval(() => {
    if (timer.textContent == 0) {
        alert('«Вы победили в конкурсе!»')
        
    } else {
        timer.textContent--;
    }
}, 1000);

