
let menuLink = document.getElementsByClassName("menu__link")


let menuLinkArr = Array.from(menuLink)

for (let i = 0; i < menuLinkArr.length; i++) {

    function getlink(i) {
        let linkClick = menuLinkArr[i];
        return linkClick;
    }

    let link = getlink(i);

    link.onclick = function () {
        if (link.parentElement.querySelector('ul').className === 'menu menu_sub') {
            link.parentElement.querySelector('ul').className = 'menu menu_sub menu_active'
        } else {
            link.parentElement.querySelector('ul').className = 'menu menu_sub'
        }
        return false;
    }
}




