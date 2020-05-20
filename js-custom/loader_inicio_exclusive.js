//var URLs = ["data/moda.json", "data/autoverde.json", "data/digital.json"]
//var categories = ["moda", "autoverde", "digital"]
var URLs = ["data/moda.json", "data/moda.json", "data/moda.json"]
var categories = ["moda", "moda", "moda"]
for(var i = 0; i<URLs.length ; i++){
    var requestURL = URLs[i];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var div = document.getElementById("exclusive");
            div.innerHTML = "";
            var jsonfile = JSON.parse(this.responseText);
            var novedades = get_productos_con_tag_propio("unisex", jsonfile);
            
            for (item = 0; (item < novedades.length && item < 6); item++) {
                pintarProductoexclusive(novedades[item], categories[i]); 
                console.log(novedades[item]);
            }
        }
    }
    request.open('GET', requestURL, false);
    request.send();
}
