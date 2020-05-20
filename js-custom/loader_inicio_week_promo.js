//var URLs = ["data/moda.json", "data/autoverde.json", "data/digital.json"]
//var categories = ["moda", "autoverde", "digital"]
var URLs = ["data/moda.json", "data/moda.json", "data/moda.json"]
var categories = ["moda", "moda", "moda"]
for(var i = 0; i<URLs.length ; i++){
    var requestURL = URLs[i];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var div = document.getElementById("week_promo");
            div.innerHTML = "";
            var jsonfile = JSON.parse(this.responseText);
            var promo = get_productos_con_tag_propio("promo", jsonfile);
            
            for (item = 0; (item < promo.length && item < 9); item++) {
                pintarProductoweekpromo(promo[item], categories[i]); 
                console.log(promo[item]);
            }
        }
    }
    request.open('GET', requestURL, false);
    request.send();
}
