function pintarProducto(item, categoria){
    var producte = '<div class="col-lg-4 col-md-6">'
                        +'<div class="single-product">'
                            +'<img class="img-fluid" src='+item['images'][0]+' alt="">'
                            +'<div class="product-details">'
                                +'<h6>'+item['name']+'</h6>'
                                +'<div class="price">'
                                    +'<h6>'+item['precio-venta']+' €</h6>'
                                    +'<h6 class="l-through">'+item['precio-nuevo']+' €</h6>'
                                +'</div>'
                                +'<div class="prd-bottom">';
    var venta = '<!-- Venta--> <a href="" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M7.07,11L7,12L7.07,13H17.35L16.5,15H7.67C8.8,17.36 11.21,19 14,19C16.23,19 18.22,17.96 19.5,16.33V19.12C18,20.3 16.07,21 14,21C10.08,21 6.75,18.5 5.5,15H2L3,13H5.05L5,12L5.05,11H2L3,9H5.5C6.75,5.5 10.08,3 14,3C16.5,3 18.8,4.04 20.43,5.71L19.57,7.75C18.29,6.08 16.27,5 14,5C11.21,5 8.8,6.64 7.67,9H19.04L18.19,11H7.07Z" /> </svg></span> <p class="hover-text">Venta</p> </a> ';
    var subasta = '<!-- Subasta--> <a href="" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M2.3,20.28L11.9,10.68L10.5,9.26L9.78,9.97C9.39,10.36 8.76,10.36 8.37,9.97L7.66,9.26C7.27,8.87 7.27,8.24 7.66,7.85L13.32,2.19C13.71,1.8 14.34,1.8 14.73,2.19L15.44,2.9C15.83,3.29 15.83,3.92 15.44,4.31L14.73,5L16.15,6.43C16.54,6.04 17.17,6.04 17.56,6.43C17.95,6.82 17.95,7.46 17.56,7.85L18.97,9.26L19.68,8.55C20.07,8.16 20.71,8.16 21.1,8.55L21.8,9.26C22.19,9.65 22.19,10.29 21.8,10.68L16.15,16.33C15.76,16.72 15.12,16.72 14.73,16.33L14.03,15.63C13.63,15.24 13.63,14.6 14.03,14.21L14.73,13.5L13.32,12.09L3.71,21.7C3.32,22.09 2.69,22.09 2.3,21.7C1.91,21.31 1.91,20.67 2.3,20.28M20,19A2,2 0 0,1 22,21V22H12V21A2,2 0 0,1 14,19H20Z" /> </svg></span> <p class="hover-text">Subasta</p> </a>';
    var intercambio = ' <!-- Intercambio--> <a href="" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z" /> </svg></span> <p class="hover-text">Intercambio</p></a>';
    
    if(item['venta']){
        producte += venta;
    }
    if(item['subasta']){
        producte += subasta;
    }
    if(item['intercambio']){
        producte += intercambio;
    }

    var resto_elemento = ' </a> <a href="single-product.html?categoria='+categoria+'&id='+item['identificador']+'" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" /> </svg></span> <p class="hover-text">Ver más</p> </a>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>';
    producte += resto_elemento;
    document.getElementById("lista_productos").innerHTML += producte;
}

function pintar_elemento_lista_filtros(id_lista_filtros, id_categoria, id_filtro, name_filtro, visible_name_filtro, cantidad_registros){
    var elemento = 
        '<li class="filter-list">' +
            '<input class="pixel-radio" type="radio"' +
                ' id="' + id_filtro + '"' +
                ' name="' + name_filtro + '"' +
                ' onclick="filtrar(\'' + id_categoria + '\', this)">'+
            '<label for="' + id_filtro + '">' + visible_name_filtro + '<span>(' + cantidad_registros + ')</span></label>' +
        '</li>';
    document.getElementById(id_lista_filtros).innerHTML += elemento;
}

function pintaPaginacion(npaginas, pagina_actual){

    var elemento = "";

    for(i = 1; i <= (npaginas+1); i++){
        if(npaginas > 1){
            if(i != pagina_actual){
                elemento += ("<a href=\"javascript:filtrar_pagina(" + i + ");\" id=\"page_" + i + "\">" + i + "</a>");
            }else{
                elemento += ("<a href=\"javascript:filtrar_pagina(" + i + ");\" id=\"page_" + i + "\" class=\"active\">" + i + "</a>");
            }
        }
    }

    document.getElementById("filtro_paginacion").innerHTML += elemento;


    var elemento_abajo = "";

    for(i = 1; i <= (npaginas+1); i++){
        if(npaginas > 1){
            if(i != pagina_actual){
                elemento_abajo += ("<a href=\"javascript:filtrar_pagina(" + i + ");\" id=\"page_" + i + "_abajo\">" + i + "</a>");
            }else{
                elemento_abajo += ("<a href=\"javascript:filtrar_pagina(" + i + ");\" id=\"page_" + i + "_abajo\" class=\"active\">" + i + "</a>");
            }
        }
    }
    document.getElementById("filtro_paginacion_abajo").innerHTML += elemento_abajo;
}

function pintarProductoexclusive(item, categoria){
    var producte = '<div class="single-exclusive-slider">'+
                        '<img class="img-fluid" src="' + item['images'][0] + '" alt="">'+
                        '<div class="product-details">'+
                            '<div class="price">'+
                                '<h6>'+item['precio-venta']+'</h6>'+
                                '<h6 class="l-through">'+item['precio-venta']+'</h6>'+
                            '</div>'+
                            '<h4>'+item['name']+'</h4>'+
                            '<div class="add-bag d-flex align-items-center justify-content-center">'+
                                '<a class= "add-button" href="single-product.html?categoria='+categoria+'&id='+item['identificador']+'"><span class="ti-bag"></span>'+
                                '<span class="add-text text-uppercase">Ver más</span></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>';
    document.getElementById("exclusive").innerHTML += producte;
}



function pintarProductoweekpromo(item, categoria){
    var producte = '<div class="col-lg-4 col-md-4 col-sm-6 mb-20">'+
    '<div class="single-related-product d-flex">'+
        '<a href="single-product.html?categoria='+categoria+'&id='+item['identificador']+'"><img width="70" height="70" src="' + item['images'][0] + '" alt=""></a>'+
        '<div class="desc">'+
            '<a href="single-product.html?categoria='+categoria+'&id='+item['identificador']+'" class="title">'+item['name']+'</a>'+
            '<div class="price">'+
                '<h6>'+item['precio-venta']+'€</h6>'+
                '<h6 class="l-through">'+item['precio-venta']+'€</h6>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>';
    document.getElementById("week_promo").innerHTML += producte;
}
function get_producto_por_id(identificador, json_object){
    for(item in json_object){
        var elemento = json_object[item];
        if(elemento['identificador'] != null && elemento['identificador'] == identificador){
            return elemento;
        }
    }
    return null;
}

function get_productos_con_tag_propio(tagg, json_object, categoria){
    var productos = [];
    for(item in json_object[categoria]){   
        var elemento = json_object[categoria][item];
        if(elemento['tags-propios'] != null){
            for(tag in elemento['tags-propios']){
                if(elemento['tags-propios'][tag] == tagg){
                    productos.push(elemento);
                }
            }
        }
    }
    return productos;
}

function anyade_parametro_individual(url, param, value){
    if (url.indexOf('?') != -1){
       url += '&'+param+'='+value;
    }else{
       url += '?'+param+'='+value;
    }
    return url;
}

function anyade_parametros_url(url, param, value){

    var urlParams = new URLSearchParams(window.location.search);

    var categoria = urlParams.getAll('categoria');
    var tipo = urlParams.getAll('tipo');
    var marca = urlParams.getAll('marca');
    var color = urlParams.getAll('color');
    var material = urlParams.getAll('material');
    var prodxpag = urlParams.getAll('prodxpag');
    var pagina = urlParams.getAll('pagina');

    if(param == "categoria"){
        prodxpag = [];
        categoria = [];
        categoria.push(value);
        pagina = [];
    }

    if(param == "tipo"){
        prodxpag = [];
        tipo = [];
        tipo.push(value);
        pagina = [];
    }

    if(param == "marca"){
        prodxpag = [];
        marca = [];
        marca.push(value);
        pagina = [];
    }

    if(param == "color"){
        prodxpag = [];
        color = [];
        color.push(value);
        pagina = [];
    }

    if(param == "material"){
        prodxpag = [];
        material = [];
        material.push(value);
        pagina = [];
    }

    if(param == "prodxpag"){
        prodxpag = [];
        prodxpag.push(value);
        pagina = [];
    }

    if(param == "pagina"){
        pagina = [];
        pagina.push(value);
    }

    //console.log("categoria ");
    //console.log(categoria);
    //console.log("tipo ");
    //console.log(tipo);
    //console.log("marca ");
    //console.log(marca);
    //console.log("color ");
    //console.log(color);
    //console.log("material ");
    //console.log(material);
//alert("");

    if(categoria.length > 0){
        url = anyade_parametro_individual(url, 'categoria', categoria[0]);
    }
    if(tipo.length > 0){
        url = anyade_parametro_individual(url, 'tipo', tipo[0]);
    }
    if(marca.length > 0){
        url = anyade_parametro_individual(url, 'marca', marca[0]);
    }
    if(color.length > 0){
        url = anyade_parametro_individual(url, 'color', color[0]);
    }
    if(material.length > 0){
        url = anyade_parametro_individual(url, 'material', material[0]);
    }
    if(prodxpag.length > 0){
        url = anyade_parametro_individual(url, 'prodxpag', prodxpag[0]);
    }
    if(pagina.length > 0){
        url = anyade_parametro_individual(url, 'pagina', pagina[0]);
    }

    return url;
}

function quita_parametros_url(url, param){

    var urlParams = new URLSearchParams(window.location.search);

    var categoria = urlParams.getAll('categoria');
    var tipo = urlParams.getAll('tipo');
    var marca = urlParams.getAll('marca');
    var color = urlParams.getAll('color');
    var material = urlParams.getAll('material');
    var pagina = urlParams.getAll('pagina');
    var prodxpag = urlParams.getAll('prodxpag');

    if(param == "categoria"){
        categoria = [];
    }

    if(param == "tipo"){
        tipo = [];
    }

    if(param == "marca"){
        marca = [];
    }

    if(param == "color"){
        color = [];
    }

    if(param == "material"){
        material = [];
    }

    if(param == "pagina"){
        pagina = [];
    }

    if(param == "prodxpag"){
        prodxpag = [];
    }

    if(categoria.length > 0){
        url = anyade_parametro_individual(url, 'categoria', categoria[0]);
    }
    if(tipo.length > 0){
        url = anyade_parametro_individual(url, 'tipo', tipo[0]);
    }
    if(marca.length > 0){
        url = anyade_parametro_individual(url, 'marca', marca[0]);
    }
    if(color.length > 0){
        url = anyade_parametro_individual(url, 'color', color[0]);
    }
    if(material.length > 0){
        url = anyade_parametro_individual(url, 'material', material[0]);
    }
    if(pagina.length > 0){
        url = anyade_parametro_individual(url, 'pagina', pagina[0]);
    }
    if(prodxpag.length > 0){
        url = anyade_parametro_individual(url, 'prodxpag', prodxpag[0]);
    }

    return url;
}

function filtrar(param, element){
    var value = element.name;

    var urlParams = new URLSearchParams(window.location.search);
    var is_activo = urlParams.getAll(param)[0] == value;

    var nuevaURL = 'products.html';
    if(is_activo){
        // Desactivamos
        window.location.href = quita_parametros_url(nuevaURL, param);
    }else{
        // Activamos
        window.location.href = anyade_parametros_url(nuevaURL, param, value);
    }
}

function filtrar_prodxpag(element){
    var selectedValue = element.options[element.selectedIndex].value;
    var urlParams = new URLSearchParams(window.location.search);
    var nuevaURL = 'products.html';
    // Activamos
    nuevaURL = anyade_parametros_url(nuevaURL, 'prodxpag', selectedValue);
    window.location.href = nuevaURL;
}

function filtrar_pagina(page_num){
    var selectedValue = page_num;
    var urlParams = new URLSearchParams(window.location.search);
    var nuevaURL = 'products.html';
    // Activamos
    nuevaURL = anyade_parametros_url(nuevaURL, 'pagina', selectedValue);
    window.location.href = nuevaURL;
}

function get_elemento_si_categoria(elemento, categoria_elemento, categoria){
    if(categoria_elemento == categoria){
        return elemento;
    }
}

function get_elemento_si_tipo(elemento, tipo){
    if(elemento[tipo]){
        return elemento;
    }
}

function get_elemento_si_marca(elemento, marca){
    if(elemento['data-propios'][0]['marca'] == marca){
        return elemento;
    }
}

function get_elemento_si_color(elemento, color){
    var to_lower_case = elemento['data-propios'][0]['color'];
    if(to_lower_case != null){
        if(to_lower_case.toLowerCase() == color.toLowerCase()){
            return elemento;
        }
    }
}

function get_elemento_si_material(elemento, material){
    var to_lower_case = elemento['data-propios'][0]['material'];
    if(to_lower_case != null){
        if(to_lower_case.toLowerCase() == material.toLowerCase()){
            return elemento;
        }
    }
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}