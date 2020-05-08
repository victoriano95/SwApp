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
	var request = new XMLHttpRequest();
	var categoria = "moda";
    var my_json = {categoria: []};
    my_json[categoria].push({"name": nombre.value,
		"descripcion" : descripcion.value,
		"tipo" : tipo.value,
		"data-propios" : [
			{
				"marca": marca.value
			}
		]}
		);
    console.log(my_json);
    request.open("POST", "data/publicar_moda.php", true);
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    request.send(JSON.stringify(my_json));
}