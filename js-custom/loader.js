$(document).ready(function(){
    var URLs = ["data/moda.json", "data/moda.json", "data/moda.json"]
    var categories = ["moda", "moda", "moda"]
    for(var i = 0; i<URLs.length ; i++){
        var requestURL = URLs[i];
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload =  function (request) {
            var div = document.getElementById("lista_productos");
            div.innerHTML = "";
            var ficheroJSON = request.response;
            for(item in ficheroJSON.moda){
                pintarProducto(ficheroJSON.moda[item]);
            }
        };
    }
});