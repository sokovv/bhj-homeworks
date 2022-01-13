let editor = document.getElementById("editor")

if (editor.value.trim() === "" && localStorage.text != undefined) {
    editor.value = localStorage.text
} else {
    localStorage.text = editor.value.trim();
}
