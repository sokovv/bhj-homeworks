let tabactive = document.getElementsByClassName("tab tab_active")
let tab = document.getElementsByClassName('tab')
let tabContactive = document.getElementsByClassName("tab__content_active")
let tabCont = document.getElementsByClassName('tab__content')

let tabArr = Array.from(tab)
let tabContArr = Array.from(tabCont)

for (let i = 0; i < tabArr.length; i++) {

    function getlink(i) {
        let linkClick = tabArr[i];
        return linkClick;
    }

    let link = getlink(i);

    function press() {
        tabactive[0].className = 'tab'
        link.className = "tab tab_active"
        tabContactive[0].className = 'tab__content'
        let ind = tabArr.findIndex(n => n.className == 'tab tab_active')
        tabContArr[ind].className = "tab__content tab__content_active"
        event.preventDefault();

    }

    link.addEventListener("click", press)

}
