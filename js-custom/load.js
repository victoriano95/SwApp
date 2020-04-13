
function productesinici(jsonfile, nomCategoria){
    for(var i=0; i<jsonfile[nomCategoria].length;i++){
        var producte = 
            "<div class=\"single-product\">"+
            "<a href=\"single-product.html\"><img class=\"img-fluid\" src=\"https://alumnes-ltim.uib.es/~tm2013/img/product/p5.jpg\" alt=\"\"></a>"+
            "<div class=\"product-details\">"+
            "<h6>" + jsonfile[nomCategoria][i].name + "</h6>"+
            "<div class=\"price\">"+
            "<h6> "+jsonfile[nomCategoria][i]["precio-venta"]+ " €</h6>"+
            "<h6 class=\"l-through\">"+jsonfile[nomCategoria][i]["precio-nuevo"]+ " €</h6>"+
            "</div>"
            "<div class=\"prd-bottom\">"+
            "<a href=\"#\"  class=\"social-info\">"+
            "<span class=\"ti-bag\"></span>"+
            "<p class=\"hover-text\">Añadir a la cesta</p>"+
            "</a>"+
            "<a href=\"#\"  class=\"social-info\">"+
            "<span class=\"lnr lnr-heart\"></span>"+
            "<p class=\"hover-text\">Favoritos</p>"+
            "</a>"+
            "<a href=\"#\" class=\"social-info\">"+
            "<span class=\"lnr lnr-sync\"></span>"+
            "<p class=\"hover-text\">comparar</p>"+
            "</a>"+
            "<a href=\"single-product.html\" class=\"social-info\">"+
            "<span class=\"lnr lnr-move\"></span>"+
            "<p class=\"hover-text\">ver más</p>"+
            "</a> </div> </div> </div> </div>"; 
        var $content = $(producte);
        $("#lista_productos").append($content)
    }
}


function productescategories(jsonfile, nomCategoria){
    $('.product-grid').isotope();
    for(var i=0; i<jsonfile[nomCategoria].length;i++){
        var producte = "<div class=\"product-item "+nomCategoria+"\">"+
            "<div class=\"product product_filter\">"+
            "<div class=\"product_image\">"+
            "<img src=\""+jsonfile[nomCategoria][i].images[0]+"\" alt=\"\">"+
            "</div>"+
            "<div class=\"favorite\"></div>"+
            "<div class=\"product_info\">"+
            "<h6 class=\"product_name\"><a href=\"producto.html\">"+jsonfile[nomCategoria][i].name+"</a></h6>"+
            "<div class=\"product_price\">"+jsonfile[nomCategoria][i]["precio-venta"]+"€</div>"+
            "</div>"+
            "</div>"+
            "<div class=\"red_button add_to_cart_button\"><a href=\"producto.html\">Ver Detalles</a></div>"+
            "</div>";
        var $content = $(producte);
        $("#lista_productos").append($content).isotope("appended", $content)
    }
}

function productesfavinici(jsonfile){
    for(var i=0; i<jsonfile.length;i++){
        var producte = "<div class=\"owl-item product_slider_item\">"+
            "<div class=\"product-item\">"+
            "<div class=\"product_image\">"+
            "<img src=\""+jsonfile[i].images[0]+"\" alt=\"\">"+
            "</div>"+
            "<div class=\"favorite\"></div>"+
            "<div class=\"product_info\">"+
            "<h6 class=\"product_name\"><a href=\"producto.html\">"+jsonfile[i].name+"</a></h6>"+
            "<div class=\"product_price\">"+jsonfile[i]["precio-venta"]+"€</div>"+
            "</div>"+
            "</div>"+
            "</div>"+
            "</div>";
        var $content = $(producte);
        //$("#favinici .owl-carousel").append($content)
        $('#favinici .owl-carousel')
            .trigger('add.owl.carousel', [$content, 0])
            .trigger('refresh.owl.carousel')
    }
}



