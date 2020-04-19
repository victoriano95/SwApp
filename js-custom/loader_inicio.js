var URLs = ["data/moda.json", "data/moda.json", "data/moda.json"]
var categories = ["moda", "moda", "moda"]
for(var i = 0; i<URLs.length ; i++){
    var requestURL = URLs[i];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var div = document.getElementById("lista_productos");
            div.innerHTML = "";
            var jsonfile = JSON.parse(this.responseText);
            var novedades = get_productos_con_tag_propio("novedad", jsonfile);
            for(item in novedades){
                pintarProducto(novedades[item]);
            }
        }
    }
    request.open('GET', requestURL, false);
    request.send();
}