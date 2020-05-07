var nombre, marca, tipo, precio, descripcion;

function inicializar(){
	nombre = document.getElementById("publicar_nombre");
	marca = document.getElementById("publicar_marca");
	tipo = document.getElementById("publicar_tipo");
	precio = document.getElementById("publicar_precio");
	descripcion = document.getElementById("publicar_descripcion");
	//email = document.getElementById("publicar_email");
}

function publicar_moda(){
	        alert("0");
	inicializar();
	var URL = "data/moda.json";
	var categoria = "moda";
	var request = new XMLHttpRequest();
	        alert("1");
	request.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        alert("2");
	        var my_json = JSON.parse(this.responseText);
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
	    					);
	        alert("3");
	        console.log("Se procede a lanzar POST -> ");
	        console.log(my_json);
	        // we send with new request the updated JSON file to the server:
	        request.open("POST", URL, true);
	        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	        // if you want to handle the POST response write (in this case you do not need it):
	        // xhr.onreadystatechange = function(){ /* handle POST response */ };
	        request.send(JSON.stringify(my_json));
	        // but on this place you have to have a server for write updated JSON to the file
	    }
    }
	request.open('GET', URL, false);
	request.send();
}