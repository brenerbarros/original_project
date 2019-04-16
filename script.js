// sintaxe = document.getElementById("id que quer modificar").style.propriedadeCSS = "valor";
var numberProducts = 1;

function setEvents()
{   
    document.getElementById("number_products").innerHTML = numberProducts.toString();
    var cores = document.getElementById("cores");
    var tamanhos = document.getElementById("tamanhos");

    cores.addEventListener('click', function(e) {
        document.getElementById("cor_txt").innerHTML = e.target.id;
    });

    tamanhos.addEventListener('click', function(e) {
        document.getElementById("tamanho_txt").innerHTML = e.target.innerHTML;
    });
}

function productsButton(a)
{
    if(a.id == "products_button_right")
    {
        numberProducts += 1;
        document.getElementById("number_products").innerHTML = numberProducts.toString();
        
        if(numberProducts >= 3)
        {
            numberProducts = 3;
            document.getElementById("number_products").innerHTML = numberProducts.toString();
        }
        
        opacityButton();
    }
    
    else if(a.id == "products_button_left")
    {
        numberProducts -= 1;
        document.getElementById("number_products").innerHTML = numberProducts.toString();
        
        if(numberProducts <= 1)
        {
            numberProducts = 1;
            document.getElementById("number_products").innerHTML = numberProducts.toString();
        }
        
        opacityButton();
    }
}

function opacityButton()
{   
    if(numberProducts == 1)
        {
            document.getElementById("products_button_left").style.opacity = 0.5;
            document.getElementById("products_button_right").style.opacity = 1;
        }
    
    else if(numberProducts > 1 && numberProducts < 3)
        {
            document.getElementById("products_button_left").style.opacity = 1;
            document.getElementById("products_button_right").style.opacity = 1;
        }
    
    else
        {
            document.getElementById("products_button_right").style.opacity = 0.5;
        }
}

window.onload = function(){
    setEvents();
    opacityButton();
};