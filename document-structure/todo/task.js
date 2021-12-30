let list = document.getElementsByClassName("tasks__list")
let input = document.getElementById("task__input")
let task = document.getElementsByClassName("task")

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
        event.preventDefault()
    }
})

function rem(e) {
    if (e.target.className === "task__remove") {
        e.target.parentElement.remove()
    }
    event.preventDefault()
}

list[0].addEventListener('click', rem);


