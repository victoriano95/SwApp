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

function get_single_product_descripcion_detalle(json_object){
	var description = json_object["description"];
	var detalle = json_object["detalle"];
	var div_text = "<p>	"+description + "</p><br>" + "<p>	"+detalle + "</p>";

	return div_text;
}

function get_single_product_especificaciones(json_object){
	var datapropios = json_object["data-propios"];
	var div_text = 	'<div class="table-responsive"> <table class="table"> <tbody>'+
			'<tr> <td><h5>Marca</h5></td><td><h5>' + datapropios[0].marca + '</h5></td></tr>'+
			'<tr> <td><h5>Estado</h5></td><td><h5>' + datapropios[0].estat + '</h5></td></tr>'+
			'<tr> <td><h5>Año de compra</h5></td><td><h5>' + datapropios[0].anydecompra + '</h5></td></tr>'+
			'<tr> <td><h5>Talla</h5></td><td><h5>' + datapropios[0].talla + '</h5></td></tr>'+
			'<tr> <td><h5>Material</h5></td><td><h5>' + datapropios[0].material + '</h5></td></tr>'+
			'<tr> <td><h5>Color</h5></td><td><h5>' + datapropios[0].color + '</h5></td></tr>'+
			'<tr> <td><h5>Sexo</h5></td><td><h5>' + datapropios[0].sexe + '</h5></td></tr>'+

			 '</tbody> </table> </div>'

	return div_text;
}

function get_single_product_review_list(json_object){
	var reseñas = json_object["valoracions"];
	var div_text = 	"";
	for(res in reseñas){
		div_text += '<div class="review_item"> <div class="media"> <div class="d-flex">' +
		'<img src="img/product/review-1.png" alt=""> </div> <div class="media-body"><h4>'+
		reseñas[res].puntuacio+'</h4>'+
				'<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>'+ 
				'</div></div><p>'+
		reseñas[res].text +
			'</p></div>';
	}
	return div_text;
}

function get_single_product_review_total_rate(json_object){
	var reseñas = json_object["valoracions"];
	var div_text = 	"";
	var media=0;
	for(res in reseñas){
		media +=reseñas[res].puntuacio;
	}
	media = media / reseñas.length();
	div_text = "Nota media: "+media;

	return div_text;
}




