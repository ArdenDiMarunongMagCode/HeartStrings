
        var counter = 0;

        let cartIcon = document.querySelector('#cart');
        let cart = document.querySelector('.shoppingCart');
        let cartClose = document.querySelector('#close-cart');
     
        cartIcon.onclick = () =>{
            cart.classList.add("active");
        };

        cartClose.onclick = () =>{
            cart.classList.remove("active");
        };

        function log_out(){
            window.location.href = "login.html";
        }
        function testIfRight() {
        
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        if (email === 'arden@gmail.com' && password === '123') {
            window.location.href = "NewGuitarShop.html";
            alert("Login Successful! Please be patient.");
        } else {
            if (counter < 3){
                alert("Invalid Email or Password");
                counter++;
                document.getElementById("a").innerText=counter;
            } else {
                alert("Please Wait before trying again");
                counter++;
                if(counter < 4){
                    counter = 0; 
                }
            }
        }
     }


     if (document.readyState == 'loading'){
        document.addEventListener('DOMContentLoaded', ready);
     } else {
        ready();
     }

     function ready(){
        var removeCart = document.getElementsByClassName('bxs-trash');
        console.log(removeCart);
        for(var i = 0; i < removeCart.length; i++){
            var button = removeCart[i];
            button.addEventListener("click", removeCartITem);
        }

        var quantityInputs = document.getElementsByClassName('cart-item-quantity');
        for(var i = 0; i < quantityInputs.length; i++){
            var input = quantityInputs[i]
            input.addEventListener("change", quantityChanged);
           
        }

        var addToCart = document.getElementsByClassName('bxs-cart-add')
        for (var i = 0; i < addToCart.length; i++){
            var button = addToCart[i]
            button.addEventListener('click', addCartClicked);
        }
     }
    
     function removeCartITem(event){
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
        updateMoney();
     }

     function quantityChanged(event){
        var input = event.target;
        if (isNaN(input.value) || input.value <= 0){
            input.value = 1;
        }
        updateMoney();
     }

     function addCartClicked(event){
        var button = event.target
        var shopProducts = button.parentElement
        var title = shopProducts.getElementsByClassName('prodcutText')[0].innerText
        var price = shopProducts.getElementsByClassName('ItemPrice')[0].innerText
        var Picture = shopProducts.getElementsByClassName('ItemImage')[0].src
        ShiftItem(title, price, Picture);
        updateMoney();
     }

     function ShiftItem(title, price, Picture){
        var cartShopBox = document.createElement("div");
        cartShopBox.classList.add('cart-box');
        var cartItems = document.getElementsByClassName('cart-items')[0];
        var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
        for (var i = 0; i < cartItemsNames.length; i++){
           if(cartItemsNames[i].innerHTML === title){
                alert("This item is already in the cart.");
                return;
           }
        } 
            var CartBoxContent = `
            <img src="${Picture}" alt="" class="cart-img">
            <div class="cart-detailsbox">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-item-quantity">
            </div>
            <i class='bx bxs-trash' ></i>`;
                
            cartShopBox.innerHTML = CartBoxContent;
            cartItems.append(cartShopBox);
            cartShopBox.getElementsByClassName('bxs-trash')[0].addEventListener('click', removeCartITem);
            cartShopBox.getElementsByClassName('cart-item-quantity')[0].addEventListener('change', quantityChanged);
     }
   

    // } 


     function updateMoney(){
        var cartCont = document.getElementsByClassName('cart-items')[0];
        var cartBoxes = cartCont.getElementsByClassName('cart-box');
        var total = 0;
        for(var i = 0; i < cartBoxes.length; i++){
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName('cart-price')[0];
            var quantityElement = cartBox.getElementsByClassName('cart-item-quantity')[0];
            var price = parseFloat(priceElement.innerText.replace("P", ""));
            var quantity = quantityElement.value;
            total = total + (price * quantity);
        }
        document.getElementsByClassName('total-price')[0].innerText = "P" + total;
     }

        document.getElementById('checkout-form').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const email = document.getElementById('email').value;
            const country = document.getElementById('Country').value;
            const address = document.getElementById('Address').value;
            const paymentMethod = document.getElementById('payment-method').value;
        
            if (!fname || !lname || !email || !address || !country || !paymentMethod) {
                alert('Please fill in all required fields.');
                return;
            }
            alert('Form submitted successfully!'); // temp
            event.target.submit();
        });



            var modal = document.getElementById("checkoutModal");

            var btn = document.querySelector(".btn-buy");

            var span = document.getElementsByClassName("close")[0];

            btn.onclick = function() {
                modal.style.display = "block";
            }

            span.onclick = function() {
                modal.style.display = "none";
            }

    
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }




     
    
    
 