import cart from "./cart.js";
import product from "./product.js";
let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

//load template files
const loadTemplate=()=>{
    fetch('/template.html')
    .then(response => response.text())
    .then(html =>{
        app.innerHTML = html;

        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML= null;
        cart();//calling cart.js

        initApp();
    })
}
loadTemplate()

const initApp=()=>{
    //load list product
    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null;
    product.forEach(product =>{
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML=
        `
            
            <img src="${product.image}"/>
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
                <button class="addCart" 
                    data-id="${product.id}">
                    Add To Cart
                </button>
        `;
        listProduct.appendChild(newProduct)
    })
}