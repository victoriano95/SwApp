
var URLs = ["data/moda.json", "data/AutoVerde.json", "data/Digital.json"];
var categories = ["moda", "AutoVerde", "Digital"];
var categories_visible = ["Moda", "AutoVerde", "Digital"];

// Filtros actuales, para filtrar los filtros de materiales
var urlParams = new URLSearchParams(window.location.search);
var current_params_categoria = urlParams.getAll('categoria');
var current_params_tipo = urlParams.getAll('tipo');
var current_params_marca = urlParams.getAll('marca');
var current_params_color = urlParams.getAll('color');
var current_params_material = urlParams.getAll('material');
var current_categorias_filtro = [];
var current_tipos_filtro = [];
var current_marcas_filtro = [];
var current_colores_filtro = [];
var current_materiales_filtro = [];

if(current_params_categoria.length > 0){
    current_categorias_filtro = [];
    current_categorias_filtro.push(current_params_categoria[0]);
}

if(current_params_tipo.length > 0){
    current_tipos_filtro = [];
    current_tipos_filtro.push(current_params_tipo[0]);
}

if(current_params_marca.length > 0){
    current_marcas_filtro = [];
    current_marcas_filtro.push(current_params_marca[0]);
}

if(current_params_color.length > 0){
    current_colores_filtro = [];
    current_colores_filtro.push(current_params_color[0]);
}

if(current_params_material.length > 0){
    current_materiales_filtro = [];
    current_materiales_filtro.push(current_params_material[0]);
}

var filtros_categoria = [];
var filtros_tipo = [];
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

            for(item in elementos_categoria){

                var elemento = elementos_categoria[item];

                var elemento_filtrado = elemento;
                if(elemento_filtrado != null && current_categorias_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_categoria(elemento_filtrado, categoria, current_categorias_filtro[0]);
                }

                if(elemento_filtrado != null && current_tipos_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_tipo(elemento_filtrado, current_tipos_filtro[0]);
                }

                if(elemento_filtrado != null && current_marcas_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_marca(elemento_filtrado, current_marcas_filtro[0]);
                }

                if(elemento_filtrado != null && current_colores_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_color(elemento_filtrado, current_colores_filtro[0]);
                }

                if(elemento_filtrado != null && current_materiales_filtro.length > 0){
                    elemento_filtrado = get_elemento_si_material(elemento_filtrado, current_materiales_filtro[0]);
                }

                if(elemento_filtrado != null){

                    // Añade filtros categoría
                    var categoria_elemento = categoria;
                    if(categoria_elemento != null){
                        if(filtros_categoria[categoria_elemento] != null){
                            filtros_categoria[categoria_elemento]++;
                        }else{
                            filtros_categoria[categoria_elemento] = 1;
                        }
                    }

                    // Añade filtros tipo intercambio
                    var tipo_elemento = elemento_filtrado['venta'];
                    if(tipo_elemento){
                        if(filtros_tipo['venta'] != null){
                            filtros_tipo['venta']++;
                        }else{
                            filtros_tipo['venta'] = 1;
                        }
                    }
                    tipo_elemento = elemento_filtrado['subasta'];
                    if(tipo_elemento){
                        if(filtros_tipo['subasta'] != null){
                            filtros_tipo['subasta']++;
                        }else{
                            filtros_tipo['subasta'] = 1;
                        }
                    }
                    tipo_elemento = elemento_filtrado['intercambio'];
                    if(tipo_elemento){
                        if(filtros_tipo['intercambio'] != null){
                            filtros_tipo['intercambio']++;
                        }else{
                            filtros_tipo['intercambio'] = 1;
                        }
                    }

                    // Añade filtros marca
                    var marca_elemento = elemento_filtrado['data-propios'][0]['marca'];
                    if(marca_elemento != null){
                        if(filtros_marca[marca_elemento] != null){
                            filtros_marca[marca_elemento]++;
                        }else{
                            filtros_marca[marca_elemento] = 1;
                        }
                    }

                    // Añade filtros color
                    var color_elemento = elemento_filtrado['data-propios'][0]['color'];
                    if(color_elemento != null){
                        color_elemento = color_elemento.toLowerCase();
                        if(filtros_color[color_elemento] != null){
                            filtros_color[color_elemento]++;
                        }else{
                            filtros_color[color_elemento] = 1;
                        }
                    }

                    // Añade filtros material
                    var material_elemento = elemento_filtrado['data-propios'][0]['material'];
                    if(material_elemento != null){
                        material_elemento = material_elemento.toLowerCase();
                        if(filtros_material[material_elemento] != null){
                            filtros_material[material_elemento]++;
                        }else{
                            filtros_material[material_elemento] = 1;
                        }
                    }
                }
            }

        }
    }
    request.open('GET', requestURL, false);
    request.send();
}

for(idx in filtros_categoria){
    // Pinta filtros categoría
    pintar_elemento_lista_filtros(
        'lista_filtros_categoria',
        'categoria',
        'filtro_'+idx,
        idx,
        capitalize(idx),
        filtros_categoria[idx]);
}

for(idx in filtros_tipo){
    // Pinta filtros tipo de intercambio
    pintar_elemento_lista_filtros(
        'lista_filtros_tipo_intercambio',
        'tipo',
        'filtro_'+idx,
        idx,
        capitalize(idx),
        filtros_tipo[idx]);
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