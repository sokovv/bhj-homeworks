let reveal = document.getElementsByClassName("reveal");


let revealArr = Array.from(reveal)

function search() {
    for (i = 0; i < revealArr.length; i++) {
        if (revealArr[i].getBoundingClientRect().top < window.innerHeight && revealArr[i].getBoundingClientRect().top > 0) {
            revealArr[i].classList.add('reveal_active')
        } else {
            revealArr[i].classList.remove('reveal_active')
        }
    }
}

document.addEventListener("scroll", search)