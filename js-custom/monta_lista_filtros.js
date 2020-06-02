
var URLs = ["data/moda.json", "data/AutoVerde.json", "data/Digital.json"];
var categories = ["moda", "AutoVerde", "Digital"];
var categories_visible = ["Moda", "AutoVerde", "Digital"];

var filtros_tipo = [
    {
        "venta" : 0,
        "subasta" : 0,
        "intercambio" : 0
    }
];
var filtros_marca = [];
var filtros_color = [];
var filtros_material = [];

for(var i = 0; i<URLs.length ; i++){
    var requestURL = URLs[i];
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonfile = JSON.parse(this.responseText);
            var categoria = categories[i];
            var elementos_categoria = jsonfile[categoria];

            // Pinta filtro categoría
            pintar_elemento_lista_filtros(
                'lista_filtros_categoria',
                'categoria',
                'filtro_'+categoria,
                categoria,
                categories_visible[i],
                elementos_categoria.length);

            for(item in elementos_categoria){
                // Añade filtros categoría
                var elemento = elementos_categoria[item];
                if(elemento["venta"]){
                    filtros_tipo[0]["venta"]++;
                }else if(elemento["subasta"]){
                    filtros_tipo[0]["subasta"]++;
                }else if(elemento["intercambio"]){
                    filtros_tipo[0]["intercambio"]++;
                }

                // Añade filtros marca
                var marca_elemento = elemento['data-propios'][0]['marca'];
                if(filtros_marca[marca_elemento] != null){
                    filtros_marca[marca_elemento]++;
                }else{
                    filtros_marca[marca_elemento] = 1;
                }

                // Añade filtros color
                var color_elemento = elemento['data-propios'][0]['color'].toLowerCase();
                if(filtros_color[color_elemento] != null){
                    filtros_color[color_elemento]++;
                }else{
                    filtros_color[color_elemento] = 1;
                }

                // Añade filtros material
                var material_elemento = elemento['data-propios'][0]['material'].toLowerCase();
                if(filtros_material[material_elemento] != null){
                    filtros_material[material_elemento]++;
                }else{
                    filtros_material[material_elemento] = 1;
                }

/*
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
                }*/
            }

        }
    }
    request.open('GET', requestURL, false);
    request.send();
}

for(idx in filtros_tipo[0]){
    // Pinta filtros tipo de intercambio
    pintar_elemento_lista_filtros(
        'lista_filtros_tipo_intercambio',
        'tipo',
        'filtro_'+idx,
        idx,
        capitalize(idx),
        filtros_tipo[0][idx]);
}

for(idx in filtros_marca){
    // Pinta filtros marca
    pintar_elemento_lista_filtros(
        'lista_filtros_marca',
        'marca',
        'filtro_'+idx,
        idx,
        capitalize(idx),
        filtros_marca[idx]);
}

for(idx in filtros_color){
    // Pinta filtros color
    pintar_elemento_lista_filtros(
        'lista_filtros_color',
        'color',
        'filtro_'+idx,
        idx,
        capitalize(idx),
        filtros_color[idx]);
}

for(idx in filtros_material){
    // Pinta filtros material
    pintar_elemento_lista_filtros(
        'lista_filtros_material',
        'material',
        'filtro_'+idx,
        idx,
        capitalize(idx).substring(0, 30),
        filtros_material[idx]);
}