
function productesinici(jsonfile, nomCategoria){
    for(var i=0; i<jsonfile[nomCategoria].length;i++){
        var producte = 
        "<div class=\"single-product\">"
        "<a href=\"single-product.html\"><img class=\"img-fluid\" src=\"img/product/p1.jpg\" alt=\"\"></a>"+
        "<div class=\"product-details\">"+
        "<h6>" + jsonfile[nomCategoria][i].name + "</h6>"+
        "<div class=\"price\">"+
        "<h6>$150.00</h6>"+
        "<h6 class=\"l-through\">"+jsonfile[nomCategoria][i]["precio-venta"]+" €</h6>"+
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
        var producte =         "<div class=\"single-product\">"
        "<a href=\"single-product.html\"><img class=\"img-fluid\" src=\"img/product/p1.jpg\" alt=\"\"></a>"+
        "<div class=\"product-details\">"+
        "<h6>" + jsonfile[nomCategoria][i].name + "</h6>"+
        "<div class=\"price\">"+
        "<h6>$150.00</h6>"+
        "<h6 class=\"l-through\">"+jsonfile[nomCategoria][i]["precio-venta"]+" €</h6>"+
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
        $("#productestots").append($content).isotope("appended", $content)
    }
}

function productesfavinici(jsonfile){
    for(var i=0; i<jsonfile.length;i++){
        var producte =        "<div class=\"single-product\">"
        "<a href=\"single-product.html\"><img class=\"img-fluid\" src=\"img/product/p1.jpg\" alt=\"\"></a>"+
        "<div class=\"product-details\">"+
        "<h6>" + "jsonfile[nomCategoria][i].name "+ "</h6>"+
        "<div class=\"price\">"+
        "<h6>$150.00</h6>"+
        "<h6 class=\"l-through\">"+ "jsonfile[nomCategoria][i]["precio-venta"]"+" €</h6>"+
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
        //$("#favinici .owl-carousel").append($content)
        $('#lista_productos')
    }
}
