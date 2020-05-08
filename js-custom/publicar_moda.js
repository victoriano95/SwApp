function publicar_moda(){
	var URL = "data/publicar_moda.php";
	var request = new XMLHttpRequest();
	var formElement = document.getElementById("nuevo_producto_form");
	request.open("POST", URL);
	request.send(new FormData(formElement));
}

/*var my_json = JSON.parse(this.responseText);
	        var identificador = my_json[categoria].length;
	        my_json[categoria].push({"name": nombre.value,
	    					"descripcion" : descripcion.value,
	    					"tipo" : tipo.value,
	    					"identificador" : identificador,
	    					"data-propios" : [
	    						{
	    							"marca": marca.value
	    						}
	    					]}
	    					);*/