
let menuLink = document.getElementsByClassName("menu__link")
let menuMenuSub = document.getElementsByClassName('menu menu_sub')
let sub;

let menuLinkArr = Array.from(menuLink)

for (let i = 0; i < menuLinkArr.length; i++) {

    function getlink(i) {
        let linkClick = menuLinkArr[i];
        return linkClick;
    }

    let link = getlink(i);



    link.onclick = function () {
        sub = link.parentElement.querySelector('ul')
        if (sub != null) {
            if (sub.className == 'menu menu_sub') {
                sub.className = 'menu menu_sub menu_active'
            } else {
                sub.className = 'menu menu_sub'
            }
            return false;
        }
    }
}




