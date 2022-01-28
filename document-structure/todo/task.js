let list = document.getElementsByClassName("tasks__list")
let input = document.getElementById("task__input")
let task = document.getElementsByClassName("task")
let button = document.getElementById('tasks__add');

function taskadd(e) {
    if (input.value.trim() != "") {
        list[0].insertAdjacentHTML('beforeEnd', `
    <div class="task">
    <div class="task__title">
    ${input.value.trim()}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`)
            ;
        input.value = "";
    }
    e.preventDefault()
}

button.addEventListener('click', taskadd)


function rem(e) {
    if (e.target.className === "task__remove") {
        e.target.parentElement.remove()
    }
    e.preventDefault()
}

list[0].addEventListener('click', rem);


