let fontSize = document.getElementsByClassName("font-size")

let fontSizeArr = Array.from(fontSize)

for (let i = 0; i < fontSizeArr.length; i++) {

    function getlink(i) {
        let linkClick = fontSizeArr[i];
        return linkClick;
    }

    let link = getlink(i);

    function press() {
        let active = fontSizeArr.findIndex(item => item.classList.contains('font-size_active'))
        fontSizeArr[active].classList.remove('font-size_active')

        if (link.dataset.size === "small") {
            link.closest('.book').classList.add('book_fs-small')
            link.closest('.book').classList.remove('book_fs-big')
        }
        if (link.dataset.size === "big") {
            link.closest('.book').classList.add('book_fs-big')
            link.closest('.book').classList.remove('book_fs-small')
        }
        if (link.dataset.size === undefined) {
            link.closest('.book').classList.remove('book_fs-small')
            link.closest('.book').classList.remove('book_fs-big')
        }

        link.classList.toggle('font-size_active')

        event.preventDefault();


    }

    link.addEventListener("click", press)


}
