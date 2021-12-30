let list = document.getElementsByClassName("tasks__list")
let input = document.getElementById("task__input")
let task = document.getElementsByClassName("task")

input.addEventListener('keydown', e => {
    if (e.keyCode === 13 && input.textLength > 0) {
        list[0].innerHTML += `
        <div class="task">
        <div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
            ;
    }
    let remove = document.getElementsByClassName("task__remove")

    for (let i = 0; i < remove.length; i++) {

        function getlink(i) {
            let linkClick = remove[i];
            return linkClick;
        }
        let link = getlink(i);

        function rem() {
            link.closest('.task').remove()
        }
        link.addEventListener('click', rem)

    }
})


