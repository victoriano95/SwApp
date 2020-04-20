function get_single_product_images(json_object){
	var images = json_object["images"];
	var div_text = "";
	for(imagen in images){
		div_text += '<div class="single-prd-item"><img class="img-fluid" src="'+images[imagen]+'" alt=""></div>';
	}
	return div_text;
}