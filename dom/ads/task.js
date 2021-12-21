
let card = document.getElementsByClassName("card")

let cardArr = Array.from(card)

for (let i = 0; i < cardArr.length; i++) {
    let rotatorCase = cardArr[i].getElementsByClassName("rotator__case")
    let rotatorCaseArr = Array.from(rotatorCase)
    setInterval(() => {
        let active = rotatorCaseArr.findIndex(item => item.classList.contains('rotator__case_active'))
        rotatorCaseArr[active].classList.remove('rotator__case_active')
        active < rotatorCaseArr.length - 1 ? active++ : active = 0;
        rotatorCaseArr[active].classList.add('rotator__case_active')
        rotatorCaseArr[active].style.color = rotatorCaseArr[active].dataset.color
    }, 1000);

}