const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function deadLost(text) {
    alert(text)
    dead.textContent = 0
    lost.textContent = 0
}

for (let index = 1; index <= 9; index++) {

    function getHole(index) {
        let holeClick = document.getElementById(`hole${index}`);
        return holeClick;
    }

    let hole = getHole(index);

    hole.onclick = function () {
        if (hole.className.includes('hole_has-mole')) {
            dead.textContent++
        } else {
            lost.textContent++
        }
        if (dead.textContent == 10) {
            deadLost('Вы победили')
        }
        if (lost.textContent == 5) {
            deadLost('Вы проиграли')
        }
    }

}





