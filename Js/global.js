var containerProduct = document.getElementById("container-product")
var button = document.getElementsByClassName('buy')
window.addEventListener("DOMContentLoaded", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./data/produit.json");
    xhr.onload = function(){
        var product = JSON.parse(xhr.responseText);
        console.log(product[1])
        productLoad(product)
    };
    xhr.send();

});

function productLoad(data){
    var allProduct = "";

    for (let i = 0; i < data.length; i++) {
        allProduct +=   "<div>" + 
                            "<figure>" + 
                                "<img src="+ data[i].img + ">" +
                                    "<figcaption>"+ data[i].name + "</figcaption>" +
                            "</figure>"+ 
                            "<p>" + data[i].price + "€</p>" + 
                            "<button type='button' class='buy' id=" +data[i].id + "> <span> Acheter </span> </button>" + 
                        "</div>";

    }
    containerProduct.insertAdjacentHTML('beforeend',allProduct);
};


button.addEventListener("click", function(){
    console.log("a");

});