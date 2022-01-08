let items = document.getElementById("items")
let loader = document.getElementsByClassName("loader loader_active")
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.responseType = "json"
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
        let obj = xhr.response.response.Valute
        for (let key in obj) {
            items.insertAdjacentHTML('beforeEnd', `
             <div class="item">
            <div class="item__code">
            ${obj[key].CharCode}
                </div>
                <div class="item__value">
                ${obj[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>
        `)
        }

        loader[0].classList.remove('loader_active')
    }
};