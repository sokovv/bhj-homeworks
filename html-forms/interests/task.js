let inputs = document.getElementsByTagName("input")

for (let i = 0; i < inputs.length; i++) {

    function chek() {
        if (inputs[i].checked === true) {
            for (j = 0; j < inputs[i].closest('.interest').querySelectorAll('li').length; j++)
                inputs[i].closest('.interest').querySelectorAll('li')[j].querySelector('input').checked = true
        }
        if (inputs[i].checked === false) {
            for (j = 0; j < inputs[i].closest('.interest').querySelectorAll('li').length; j++)
                inputs[i].closest('.interest').querySelectorAll('li')[j].querySelector('input').checked = false
        }
    }
    inputs[i].addEventListener('click', chek)
}
