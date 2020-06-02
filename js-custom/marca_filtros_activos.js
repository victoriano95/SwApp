var urlParams = new URLSearchParams(window.location.search);
var categoria = urlParams.getAll('categoria');
var tipo = urlParams.getAll('tipo');
var marca = urlParams.getAll('marca');
var color = urlParams.getAll('color');
var material = urlParams.getAll('material');

if(categoria.length > 0){
	document.getElementById('filtro_'+categoria[0]).checked = true;
}

if(tipo.length > 0){
	document.getElementById('filtro_'+tipo[0]).checked = true;
}

if(marca.length > 0){
	document.getElementById('filtro_'+marca[0]).checked = true;
}

if(color.length > 0){
	document.getElementById('filtro_'+color[0]).checked = true;
}

if(material.length > 0){
	document.getElementById('filtro_'+material[0]).checked = true;
}