console.log('correcto');

let requestURL = 'data/moda.json';
console.log('estoy dentro');

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
    let res = $('#lista_productos');
    res.html("");
    res.append("TEST");
}

var moda = MODA;
console.log(moda);
for(item in moda.moda){
    pintarProducto(item);
}