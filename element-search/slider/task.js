let prev = document.getElementsByClassName("slider__arrow slider__arrow_prev")
let next = document.getElementsByClassName("slider__arrow slider__arrow_next")
let sliderItem = document.getElementsByClassName("slider__item")

let sliderItemArr = Array.from(sliderItem)

next[0].onclick = function () {
    let active = sliderItemArr.findIndex(item => item.className == 'slider__item slider__item_active');
    sliderItemArr[active].className = 'slider__item'
    active < sliderItemArr.length - 1 ? active++ : active = 0;
    sliderItemArr[active].className = 'slider__item slider__item_active'
}

prev[0].onclick = function () {
    let active = sliderItemArr.findIndex(item => item.className == 'slider__item slider__item_active');
    sliderItemArr[active].className = 'slider__item'
    active > 0 ? active-- : active = sliderItemArr.length - 1;
    sliderItemArr[active].className = 'slider__item slider__item_active'
}
