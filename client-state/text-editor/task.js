let editor = document.getElementById("editor")
editor.value = localStorage.getItem('text')

function onInput() {
    localStorage.setItem('text', editor.value.trim());
}
editor.addEventListener("input", onInput);