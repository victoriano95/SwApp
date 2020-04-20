function get_single_product_images(json_object){
	var images = json_object["images"];
	var div_text = "";
	for(imagen in images){
		div_text += '<div class="single-prd-item"><img class="img-fluid" src="'+images[imagen]+'" alt=""></div>';
	}
	return div_text;
}

function get_single_product_name(json_object){
	var name = json_object["name"];
	var div_text = name + "";
	return div_text;
}

function get_single_product_prize(json_object){
	var prize = json_object["precio-venta"];
	var div_text = prize + " €";
	return div_text;
}

function get_single_product_categoria(categoria){
	var div_text = "";
	div_text += "<span>Categoria</span> : " + categoria;
	return div_text;
}

function get_single_product_venta(json_object){
	var venta = json_object["venta"];
	var div_text = "";
	if(venta){
		div_text = "<span>Venta</span> : Si";
	}else{
		div_text = "<span>Venta</span> : No";
	}
	return div_text;
}

function get_single_product_subasta(json_object){
	var subasta = json_object["subasta"];
	var div_text = "";
	if(subasta){
		div_text = "<span>Subasta</span> : Si";
	}else{
		div_text = "<span>Subasta</span> : No";
	}
	return div_text;
}

function get_single_product_intercambio(json_object){
	var intercambio = json_object["intercambio"];
	var div_text = "";
	if(intercambio){
		div_text = "<span>Intercambio</span> : Si";
	}else{
		div_text = "<span>Intercambio</span> : No";
	}
	return div_text;
}

function get_single_product_descripcion(json_object){
	var description = json_object["description"];
	var div_text = description + "";
	return div_text;
}