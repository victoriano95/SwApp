$(document).ready(function(){
    var URLs = ["data/moda.json", "data/esports.json"]
    var categories = ["moda", "DEPORTE"]
    for(var i = 0; i<URLs.length ; i++){
        var requestURL = URLs[i];
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        var nomCategoria = categories[i]

        request.onload =  function (request, nomCategoria) {
            return function(){
                var jsonfile = request.response;
                productescategories(jsonfile, nomCategoria);
            }
        }(request, nomCategoria)
    }
})