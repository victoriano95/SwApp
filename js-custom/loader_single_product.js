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
    }
}
request.open('GET', URL, false);
request.send();