var URLs = ["data/moda.json", "data/AutoVerde.json", "data/Digital.json"]
var categories = ["moda", "AutoVerde", "Digital"]
for(var i = 0; i<URLs.length ; i++){
    var requestURL = URLs[i];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonfile = JSON.parse(this.responseText);
            var unisex = get_productos_con_tag_propio("unisex", jsonfile, categories[i]);
            for (item = 0; (item < unisex.length && item < 6); item++) {
                pintarProductoexclusive(unisex[item], categories[i]); 
            }
        }
    }
    request.open('GET', requestURL, false);
    request.send();
}
