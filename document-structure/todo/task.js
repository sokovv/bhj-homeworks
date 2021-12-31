let list = document.getElementsByClassName("tasks__list")
let input = document.getElementById("task__input")
let task = document.getElementsByClassName("task")
let button = document.getElementById('tasks__add');


button.addEventListener('click', e => {
    e.preventDefault()
})

input.addEventListener('keydown', e => {
    if (e.key === "Enter" && input.value.trim() != "") {
        list[0].insertAdjacentHTML('beforeEnd', `
        <div class="task">
        <div class="task__title">
        ${input.value.trim()}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`)
            ;
        input.value = "";
        e.preventDefault()

    }
})

function rem(e) {
    if (e.target.className === "task__remove") {
        e.target.parentElement.remove()
    }
    e.preventDefault()
}

list[0].addEventListener('click', rem);


