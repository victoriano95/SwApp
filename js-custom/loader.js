console.log('correcto');

let requestURL = 'data/moda.json';

/*
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr);
    }
};
xmlhttp.open("GET", requestURL, true);
xmlhttp.send();
*/
function pintarProducto(value){
    console.log('estoy dentro de pintarproducto');
    let res = $('#lista_productos');
    res.html("");
    res.append("TEST");
    //res.innerHTML("hola");
}

var moda = MODA;
console.log(moda);
for(item in moda.moda){
    console.log(item["name"])

    pintarProducto(item);
}