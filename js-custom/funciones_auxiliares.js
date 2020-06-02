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
                                +'<div class="prd-bottom">'

                                //Añadir condicionales para mostrar sólo los que correspondan
                                    +'<!-- Venta--> <a href="" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M7.07,11L7,12L7.07,13H17.35L16.5,15H7.67C8.8,17.36 11.21,19 14,19C16.23,19 18.22,17.96 19.5,16.33V19.12C18,20.3 16.07,21 14,21C10.08,21 6.75,18.5 5.5,15H2L3,13H5.05L5,12L5.05,11H2L3,9H5.5C6.75,5.5 10.08,3 14,3C16.5,3 18.8,4.04 20.43,5.71L19.57,7.75C18.29,6.08 16.27,5 14,5C11.21,5 8.8,6.64 7.67,9H19.04L18.19,11H7.07Z" /> </svg></span> <p class="hover-text">Venta</p> </a> '
                                    +'<!-- Subasta--> <a href="" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M2.3,20.28L11.9,10.68L10.5,9.26L9.78,9.97C9.39,10.36 8.76,10.36 8.37,9.97L7.66,9.26C7.27,8.87 7.27,8.24 7.66,7.85L13.32,2.19C13.71,1.8 14.34,1.8 14.73,2.19L15.44,2.9C15.83,3.29 15.83,3.92 15.44,4.31L14.73,5L16.15,6.43C16.54,6.04 17.17,6.04 17.56,6.43C17.95,6.82 17.95,7.46 17.56,7.85L18.97,9.26L19.68,8.55C20.07,8.16 20.71,8.16 21.1,8.55L21.8,9.26C22.19,9.65 22.19,10.29 21.8,10.68L16.15,16.33C15.76,16.72 15.12,16.72 14.73,16.33L14.03,15.63C13.63,15.24 13.63,14.6 14.03,14.21L14.73,13.5L13.32,12.09L3.71,21.7C3.32,22.09 2.69,22.09 2.3,21.7C1.91,21.31 1.91,20.67 2.3,20.28M20,19A2,2 0 0,1 22,21V22H12V21A2,2 0 0,1 14,19H20Z" /> </svg></span> <p class="hover-text">Subasta</p> </a>'
                                    +' <!-- Intercambio--> <a href="" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M12,18A6,6 0 0,1 6,12C6,11 6.25,10.03 6.7,9.2L5.24,7.74C4.46,8.97 4,10.43 4,12A8,8 0 0,0 12,20V23L16,19L12,15M12,4V1L8,5L12,9V6A6,6 0 0,1 18,12C18,13 17.75,13.97 17.3,14.8L18.76,16.26C19.54,15.03 20,13.57 20,12A8,8 0 0,0 12,4Z" /> </svg></span> <p class="hover-text">Intercambio</p></a>'
                                   // +'<a href="" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /> </svg></span> <p class="hover-text">Favorito</p> '
                                    +' </a> <a href="single-product.html?categoria='+categoria+'&id='+item['identificador']+'" class="social-info"> <span class=""><svg style="width:24px;height:24px" viewBox="0 0 24 24"> <path fill="currentColor" d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" /> </svg></span> <p class="hover-text">Ver más</p> </a>'
                                    
                                +'</div>'
                            +'</div>'
                        +'</div>'
                    +'</div>';
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
        console.log(""+elemento);
    document.getElementById(id_lista_filtros).innerHTML += elemento;
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

    if(param == "categoria"){
        categoria = [];
        categoria.push(value);
    }

    if(param == "tipo"){
        tipo = [];
        tipo.push(value);
    }

    if(param == "marca"){
        marca = [];
        marca.push(value);
    }

    if(param == "color"){
        color = [];
        color.push(value);
    }

    if(param == "material"){
        material = [];
        material.push(value);
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

    return url;
}

function quita_parametros_url(url, param){

    var urlParams = new URLSearchParams(window.location.search);

    var categoria = urlParams.getAll('categoria');
    var tipo = urlParams.getAll('tipo');
    var marca = urlParams.getAll('marca');
    var color = urlParams.getAll('color');
    var material = urlParams.getAll('material');

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
    if(elemento['tags-propios'].indexOf(color) != -1){
        return elemento;
    }
}

function get_elemento_si_material(elemento, material){
    if(elemento['data-propios'][0]['material'] == material){
        return elemento;
    }
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}