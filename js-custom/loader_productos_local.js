var moda = MODA;
var div = document.getElementById("lista_productos");
div.innerHTML = "";
for(item in moda.moda){
    pintarProducto(moda.moda[item]);
}