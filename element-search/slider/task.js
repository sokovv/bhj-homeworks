let prev = document.getElementsByClassName("slider__arrow slider__arrow_prev")
let next = document.getElementsByClassName("slider__arrow slider__arrow_next")
let sliderItem = document.getElementsByClassName("slider__item")

let sliderItemArr = Array.from(sliderItem)

next[0].onclick = function () {
    for (let i = 0; i < sliderItemArr.length; i++) {
        if (sliderItemArr[i].className === 'slider__item slider__item_active') {
            sliderItemArr[i].className = 'slider__item'
            i++
            if (sliderItemArr[i] == undefined) {
                i = 0
                sliderItemArr[i].className = 'slider__item slider__item_active'
            }
            sliderItemArr[i].className = 'slider__item slider__item_active'
        }

    }
}

prev[0].onclick = function () {
    for (let i = 0; i < sliderItemArr.length; i++) {
        if (sliderItemArr[i].className === 'slider__item slider__item_active') {
            sliderItemArr[i].className = 'slider__item'
            i--
            if (sliderItemArr[i] == undefined) {
                i = sliderItemArr.length - 1
                sliderItemArr[i].className = 'slider__item slider__item_active'
            }
            sliderItemArr[i].className = 'slider__item slider__item_active'
        }

    }
}












