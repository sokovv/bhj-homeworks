let dropdownLink = document.getElementsByClassName("dropdown__link")
let dropdownlist = document.getElementsByClassName('dropdown__list')
let dropdownValue = document.getElementsByClassName('dropdown__value')
let dropdownItem = document.getElementsByClassName('dropdown__item')

let dropdownValueArr = Array.from(dropdownValue)
let dropdownLinkArr = Array.from(dropdownLink)

for (let i = 0; i < dropdownValueArr.length; i++) {

    function getlink(i) {
        let linkClick = dropdownValueArr[i];
        return linkClick;
    }

    let link = getlink(i);

    function press() {
        if (link != null) {
            if (link.nextElementSibling.className === 'dropdown__list') {
                link.nextElementSibling.className = 'dropdown__list dropdown__list_active'
            } else {
                link.nextElementSibling.className = 'dropdown__list'
            }
        }

    }

    link.addEventListener("click", press)


    for (let i = 0; i < dropdownLinkArr.length; i++) {

        function getlink(i) {
            let linkClick = dropdownLinkArr[i];
            return linkClick;
        }

        let link = getlink(i);

        function press() {
            if (link != null) {
                link.parentElement.parentElement.previousElementSibling.innerText = link.innerText
                link.parentElement.parentElement.className = 'dropdown__list'
            }
            event.preventDefault();

        }

        link.addEventListener("click", press)

    }

}
