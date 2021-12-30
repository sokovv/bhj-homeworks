let tooltip = document.getElementsByClassName("has-tooltip")

for (let i = 0; i < tooltip.length; i++) {
    tooltip[i].insertAdjacentHTML('afterEnd', '<div class="tooltip">Текст подсказки</div>')
    function getlink(i) {
        let linkClick = tooltip[i];
        return linkClick;
    }
    let link = getlink(i);

    function tool() {
        link.nextElementSibling.classList.toggle('tooltip_active')
        let t = link.getBoundingClientRect().top
        let l = link.getBoundingClientRect().left
        link.nextElementSibling.style.left = l + 10 + 'px';
        link.nextElementSibling.style.top = t + 20 + 'px';
        link.nextElementSibling.innerText = link.title
        event.preventDefault()
    }
    link.addEventListener('click', tool)

}