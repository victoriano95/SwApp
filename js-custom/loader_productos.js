
var URLs = ["data/moda.json", "data/AutoVerde.json", "data/Digital.json"];
var categories = ["moda", "AutoVerde", "Digital"];
var tipos_filtro = [];
var marcas_filtro = [];
var colores_filtro = [];
var materiales_filtro = [];

var urlParams = new URLSearchParams(window.location.search);
var categoria = urlParams.getAll('categoria');
var tipo = urlParams.getAll('tipo');
var marca = urlParams.getAll('marca');
var color = urlParams.getAll('color');
var material = urlParams.getAll('material');

if(categoria.length > 0){
    var cat_name = categoria[0];
    var cat_index = categories.indexOf(cat_name);
    var cat_url = URLs[cat_index];
    categories = [];
    categories.push(cat_name);
    URLs = [];
    URLs.push(cat_url);
}

if(tipo.length > 0){
    tipos_filtro = [];
    tipos_filtro.push(tipo[0]);
}

if(marca.length > 0){
    marcas_filtro = [];
    marcas_filtro.push(marca[0]);
}

if(color.length > 0){
    colores_filtro = [];
    colores_filtro.push(color[0]);
}

if(material.length > 0){
    materiales_filtro = [];
    materiales_filtro.push(material[0]);
}

for(var i = 0; i<URLs.length ; i++){
    var requestURL = URLs[i];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonfile = JSON.parse(this.responseText);
            for(item in jsonfile[categories[i]]){
                var elemento_filtrado = jsonfile[categories[i]][item];
                if(elemento_filtrado != null && tipos_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_tipo(elemento_filtrado, tipos_filtro[0]);
                }
                if(elemento_filtrado != null && marcas_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_marca(elemento_filtrado, marcas_filtro[0]);
                }
                if(elemento_filtrado != null && colores_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_color(elemento_filtrado, colores_filtro[0]);
                }
                if(elemento_filtrado != null && materiales_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_material(elemento_filtrado, materiales_filtro[0]);
                }
                if(elemento_filtrado != null){
                    pintarProducto(elemento_filtrado, categories[i]);
                }
            }
        }
    }
    request.open('GET', requestURL, false);
    request.send();
}
