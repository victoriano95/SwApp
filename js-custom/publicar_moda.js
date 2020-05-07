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
	inicializar();
	var URL = "data/moda.json";
	var categoria = "moda";
	var request = new XMLHttpRequest();
	        alert("1");
	request.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        alert("2");
	        var json_moda = JSON.parse(this.responseText);
	        json_moda.push({"name": nombre,
	    					"descripcion" : descripcion,
	    					"tipo" : tipo,
	    					"identificador" : identificador,
	    					"data-propios" : [
	    						{
	    							"marca": marca
	    						}
	    					]}
	    					);
	        alert("3");
	        console.log("Se procede a lanzar POST -> ");
	        console.log(json_moda);
	        // we send with new request the updated JSON file to the server:
	        xhr.open("POST", URL, true);
	        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	        // if you want to handle the POST response write (in this case you do not need it):
	        // xhr.onreadystatechange = function(){ /* handle POST response */ };
	        xhr.send("jsonTxt="+JSON.stringify(json_moda));
	        // but on this place you have to have a server for write updated JSON to the file
	    }
    }
	request.open('GET', requestURL, false);
	request.send();
}