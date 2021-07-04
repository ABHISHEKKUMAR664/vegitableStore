var carts = document.querySelectorAll('.btn');
let products = [
    {
        name: 'aaa',
        tag: 'pu',
        price: 15,
        inCart: 0
    },
    {
        name: 'aba',
        tag: 'pum',
        price: 15,
        inCart: 0
    },
    {
        name: 'abc',
        tag: 'puma',
        price: 10,
        inCart: 0
    },
]
console.log(carts);
for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        console.log("wokg");
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
//its gonna check localstorage to get an item of cardnumber 
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
     
    if (productNumbers) {
        document.querySelector('.cart span').textContent=productNumbers; 
    }
}


//to know how many item we adding
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers =parseInt(productNumbers);
       if(productNumbers) {
          productNumbers = localStorage.setItem('cartNumbers', productNumbers + 1);
          document.querySelector('.cart span').textContent = 1;
        }
       else {
        productNumbers = localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.inCart]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
               [product.tag]:product
           }
    }
    
    localStorage.setItem("productInCart", JSON.stringify(cartItems));

}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    console.log("my cart cost", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItems("totalCost", cartCost + product.price);
    } else {
        localStorage.setItems("totalCost", product.price);
    }
}
 
function displayCart() {
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.price(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem(`totalCost`);

    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(items => {
            productContainer.innerHTML += `<div>
            <span>${item.tag}</span>
            <span>${item.price}</span></div>
                < div class="price" > ${item.price}</div >
                    <div class="total">Rs{item.inCart * item.price}</div>`
        });
        productContainer.innerHTML += `
              <div class="basketTotalContainer">
                 <h4 class="basketTotalTitle">Basket Total</h4>
                 <h4 class="basketTotal">${cartCost},00</h4>`
                 `
    }
}

 onLoadCartNumbers(); 
 displayCart()