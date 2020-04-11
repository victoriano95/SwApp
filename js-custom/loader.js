console.log('correcto');




//var myJSON = '{"name":"John", "age":31, "city":"New York"}';
//var myObj = JSON.parse(myJSON);
//document.getElementById("demo").innerHTML = myObj.name;


//function cargarFichero(){
let requestURL = 'data/moda.json';
console.log('estoy dentro');
const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'data/moda.json');
//xhttp.responseType = 'json';
xhttp.send();
console.log(this.responseText);



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