var moda = MODA;
var div = document.getElementById("lista_productos");
div.innerHTML = "";
var novedades = get_productos_con_tag_propio("novedad", moda, "moda");
for(item in novedades){
    pintarProducto(novedades[item]);
}