$(document).ready(function(){
    var URLs = ['data/moda.json', 'data/moda.json']
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
                console.log("s'ha carregat"+nomCategoria);

                var jsonfile = request.response;

                console.log(jsonfile.moda)

                productesinici(jsonfile, nomCategoria);
                if(nomCategoria=="moda"){
                    productesfavinici(jsonfile.moda);
                }
            }
        }(request, nomCategoria)
    }

});