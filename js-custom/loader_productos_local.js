var URLs = [MODA, MODA, MODA]
var categories = ["moda", "moda", "moda"]
for(var i = 0; i<URLs.length ; i++){
    var requestURL = URLs[i];
    var div = document.getElementById("lista_productos");
    div.innerHTML = "";
    var jsonfile = requestURL;
    for(item in jsonfile[categories[i]]){
        console.log(categories[i]);
        pintarProducto(jsonfile[categories[i]][item], categories[i]);
    }
}