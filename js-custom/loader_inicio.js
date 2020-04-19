$(document).ready(function(){
	var URLs = ["data/moda.json"]
    var categories = ["moda"]
    for(var i = 0; i<URLs.length ; i++){
        var requestURL = URLs[i];
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload =  function (request) {
            return function(){
				var div = document.getElementById("lista_productos");
				div.innerHTML = "";
                var jsonfile = request.response;
                var novedades = get_productos_con_tag_propio("novedad", jsonfile, "moda");
                for(item in novedades){
                    pintarProducto(novedades[item]);
                }
            }
        }(request)
    }
});