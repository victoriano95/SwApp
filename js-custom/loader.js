$(document).ready(function(){
    var URLs = ["data/moda.json", "data/moda.json", "data/moda.json"]
    var categories = ["moda", "moda", "moda"]
    for(var i = 0; i<URLs.length ; i++){
        var requestURL = URLs[i];
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        var nomCategoria = categories[i]
        request.onload =  function (request, nomCategoria) {
            var ficheroJSON = request.response;
            console.log("Se ha cargado "+nomCategoria);
            pintaProducto(ficheroJSON, nomCategoria);
        };
    }
});