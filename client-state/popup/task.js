let sub = document.getElementById("subscribe-modal")
let close = document.getElementsByClassName("modal__close modal__close_times")

sub.classList.add('modal_active')

if (document.cookie == 'name=modal') {

    const getCookie = (name) => {
        const value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2) {
            return parts
                .pop()
                .split(";")
                .shift();
        }
    }
    sub.className = getCookie('name')
}

function closed() {
    sub.classList.remove('modal_active')
    document.cookie = 'name=modal'
}
close[0].onclick = closed


