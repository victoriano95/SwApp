var urlParams = new URLSearchParams(window.location.search);
var categoria = urlParams.getAll('categoria');
var tipo = urlParams.getAll('tipo');
var marca = urlParams.getAll('marca');
var color = urlParams.getAll('color');
var material = urlParams.getAll('material');
var pagina = urlParams.getAll('pagina'); // PRODUCTOS_PAGINA elems por pagina
var prodxpag = urlParams.getAll('prodxpag');

	//alert(document.getElementById('filtro_'+categoria[0]));
if(categoria.length > 0){
	var element = document.getElementById('filtro_'+categoria[0]);
	if(element != null){
		element.checked = true;
	}
}

if(tipo.length > 0){
	var element = document.getElementById('filtro_'+tipo[0]);
	if(element != null){
		element.checked = true;
	}
}

if(marca.length > 0){
	var element = document.getElementById('filtro_'+marca[0]);
	if(element != null){
		element.checked = true;
	}
}

if(color.length > 0){
	var element = document.getElementById('filtro_'+color[0]);
	if(element != null){
		element.checked = true;
	}
}

if(pagina.length > 0){
	var element = document.getElementById('page_'+pagina[0]);
	if(element != null){
		element.classList.add("active");
	}
}else{
	document.getElementById('page_1').classList.add("active");
}

if(prodxpag.length > 0){
	var element = document.getElementById('prodxpag_sel');
	if(element != null){
		element.value = prodxpag[0];
	}
}else{
	document.getElementById('prodxpag_sel').value = 15;
}