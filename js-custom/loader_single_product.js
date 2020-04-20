var urlParams = new URLSearchParams(window.location.search);
var categoria = urlParams.getAll('categoria');
var identificador = urlParams.getAll('id');
var URL = "data/"+categoria+".json";
var request = new XMLHttpRequest();
console.log("URL: "+URL);
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json_object = JSON.parse(this.responseText);
        var producto = get_producto_por_id(identificador, json_object[categoria]);

        var div_imagenes = document.getElementById("single_product_images");
        div_imagenes.innerHTML = get_single_product_images(producto);


        var div_nombre = document.getElementById("single_product_name");
        div_nombre.innerHTML = get_single_product_name(producto);


        var div_precio = document.getElementById("single_product_prize");
        div_precio.innerHTML = get_single_product_prize(producto);


        var div_categoria = document.getElementById("single_product_categoria");
        div_categoria.innerHTML = get_single_product_categoria(categoria);


        var div_venta = document.getElementById("single_product_venta");
        div_venta.innerHTML = get_single_product_venta(producto);


        var div_subasta = document.getElementById("single_product_subasta");
        div_subasta.innerHTML = get_single_product_subasta(producto);


        var div_intercambio = document.getElementById("single_product_intercambio");
        div_intercambio.innerHTML = get_single_product_intercambio(producto);


        var div_descripcion = document.getElementById("single_product_descripcion");
        div_descripcion.innerHTML = get_single_product_descripcion(producto);

    }
}
request.open('GET', URL, false);
request.send();