const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let start;
let end;
function changeSizes() {
    count.textContent++
    if (image.width === 200) {
        image.width = 150
    } else {
        image.width = 200;
    }
    if (count.textContent % 2 === 0) {
        end = new Date;
        speed.textContent = (1 / ((end - start) / 1000)).toFixed(2);
    }
    if (count.textContent % 2 != 0) {
        start = new Date;
        speed.textContent = (1 / ((start - end) / 1000)).toFixed(2);
    }
    if (isNaN(speed.textContent)) {
        speed.textContent = 'Недостаточно кликов, кликайте еще';
    }
};

image.onclick = changeSizes;





