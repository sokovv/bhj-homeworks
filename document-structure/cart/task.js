let dec = document.getElementsByClassName("product__quantity-control product__quantity-control_dec")
let inc = document.getElementsByClassName("product__quantity-control product__quantity-control_inc")
let add = document.getElementsByClassName("product__add")
let card = document.getElementsByClassName("cart__products")
let id = [];

for (let i = 0; i < inc.length; i++) {
    function getlink(i) {
        let linkClick = inc[i];
        return linkClick;
    }
    let link = getlink(i);
    link.addEventListener("click", () => link.previousElementSibling.innerText++)
}

for (let i = 0; i < dec.length; i++) {
    function getlink(i) {
        let linkClick = dec[i];
        return linkClick;
    }
    let link = getlink(i);

    link.addEventListener("click", () => {
        if (link.nextElementSibling.innerText > 1) {
            link.nextElementSibling.innerText--
        }
    }
    )
}

for (i = 0; i < add.length; i++) {
    function getlink(i) {
        let linkClick = add[i];
        return linkClick;
    }
    let link = getlink(i);

    function basket() {
        if (card[0].children.length > 0 && id.includes(link.closest(".product").dataset.id) === true) {
            for (let j = 0; j < card[0].children.length; j++) {
                if (card[0].children[j] != undefined && link.closest(".product").dataset.id == card[0].children[j].dataset.id) {
                    let a = card[0].children[j].querySelector('.cart__product-count').innerText
                    let b = link.closest('.product').querySelector('.product__quantity-value').innerText
                    card[0].children[j].querySelector('.cart__product-count').innerText = +a + (+b)
                }
            }
        } else {
            id.push(link.closest(".product").dataset.id)
            card[0].innerHTML += `
    <div class="cart__product" data-id=${link.closest(".product").dataset.id}>
    <img src=${link.closest('.product').querySelector('img').currentSrc} alt=""
    class="cart__product-image">
    <div class="cart__product-count">${link.closest('.product').querySelector('.product__quantity-value').innerText}</div>
    </div>`
                ;
        }

    }

    link.addEventListener("click", basket)

}

