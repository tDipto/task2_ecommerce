/* var prodcutno1 = document.getElementById('prodcutno1');
var cart_open1 = document.getElementById('cart-open1');

prodcutno1.addEventListener('click', (event)=>{
    console.log(prodcutno1.id);
    prodcutno1.style.display = 'none';
    cart_open1.style.display = 'block';  
}) */

const cart_arr = [];
let total_price = 0;

function count_open(click_id){
    let id = click_id.slice(-1);
    let pid = `cart-open${id}`;
    document.getElementById(pid).style.display = 'block';
    document.getElementById(click_id).style.display = 'none';
    let addcartid = `no-of-product${id}`;
    let addcart = document.getElementById(addcartid);
    let obj = {
        name:addcart.id,
        qnt: addcart.value,
        price:addcart.alt
    };
    cart_arr.push(obj);
    /* console.log(cart_arr); */
}



function inCrement(click_id){
    pid = document.getElementById(click_id);
    if(pid.value>=5){
        alert('Not in stock');
    } else {
        pid.value = parseInt(pid.value) + 1;

        let index = cart_arr.findIndex(function(value){
            return value.name === pid.id;
        })
        cart_arr[index].qnt = pid.value;
       /*  console.log(cart_arr); */


    }
}

function deCrement(click_id){
    pid = document.getElementById(click_id);
    if(pid.value <=1){
        let id = click_id.slice(-1);
        let pid = `cart-open${id}`;
        let productid = `prodcutno${id}`
        document.getElementById(pid).style.display = 'none';
        document.getElementById(productid).style.display = 'block';


    } else {
        pid.value = parseInt(pid.value) - 1;


        let index = cart_arr.findIndex(function (value) {
            return value.name === pid.id;
        })
        cart_arr[index].qnt = pid.value;
    }
}



const newItem = (name,qnt,price) => {
    let li = document.createElement('li');
    let divp = document.createElement('div');
    let divName = document.createElement('div');
    let divQnt = document.createElement('div');
    let divPrice = document.createElement('div');

    divName.classList.add("product1name");
    divQnt.classList.add("productquntity" , "pr-4");
    divPrice.classList.add("productprice");

    divName.innerHTML = name;
    divQnt.innerHTML = qnt;
    divPrice.innerHTML = `${price} tk`;

    divp.appendChild(divName);
    divp.appendChild(divQnt);
    divp.appendChild(divPrice);

    divp.classList.add("d-flex" ,"flex-row" ,"justify-content-between");

    li.appendChild(divp);

    li.classList.add("product-1");

    return li;


}

const createList = (ol) =>{
    
    cart_arr.forEach(function(obj){
        /* total_price += (obj.qnt*obj.price); */
        ol.appendChild(newItem(obj.name, obj.qnt, obj.price));
        
    })
    cart_arr.forEach(function(obj){
        total_price += (obj.qnt*obj.price);  
        
    })
    
}


function buyNow() {
    if (!cart_arr.length) {
        alert("Please Shop Something")
        return false;
    } else {
        document.getElementById('payment').style.display = 'block';
        let ol = document.getElementById('cart-products');
        createList(ol);
        console.log(total_price);
        document.getElementById('totalpricetk').innerHTML = `${total_price} tk`;
       /*  window.open(url) */
       return true;
    }
}