console.log('correcto');




//var myJSON = '{"name":"John", "age":31, "city":"New York"}';
//var myObj = JSON.parse(myJSON);
//document.getElementById("demo").innerHTML = myObj.name;


//function cargarFichero(){
let requestURL = 'data/moda.json';
console.log('estoy dentro');

(function(){
   var moda = MODA;
   console.log(moda);
})();

/*
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        console.log(myArr);
    }
};
xmlhttp.open("GET", requestURL, true);
xmlhttp.send();*/

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' +
        arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}



   // let datos = JSON.parse(this.responseText);
    let res = document.querySelector('#products');
    res.innerHTML = '';
     for (let item of datos){
        res.innerHTML = `
        <div class="col-lg-4 col-md-6">
        <div class="single-product">
            <a href="single-product.html"><img class="img-fluid" src="img/product/p1.jpg" alt=""></a>
            <div class="product-details">
                <h6>$[item.name]</h6>
                <div class="price">
                    <h6>$[item.precio-nuevo] €</h6>
                    <h6 class="l-through">$210.00</h6>
                </div>
                <div class="prd-bottom">

                    <a href="" class="social-info">
                        <span class="ti-bag"></span>
                        <p class="hover-text">Añadir a la cesta</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-heart"></span>
                        <p class="hover-text">Favoritos</p>
                    </a>
                    <a href="" class="social-info">
                        <span class="lnr lnr-sync"></span>
                        <p class="hover-text">comparar</p>
                    </a>
                    <a href="single-product.html" class="social-info">
                        <span class="lnr lnr-move"></span>
                        <p class="hover-text">ver más</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
        
        `

     }



//}





//}