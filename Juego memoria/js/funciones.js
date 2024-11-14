//variables globales
const d = document
//imagenes del juego 
let imgN1= [
    {nombre:"inversionista de alto riesgo", url:"img/image.png"},
    {nombre:"inversionista de alto riesgo", url:"img/activo.jpg"},
    {nombre:"inversionista de alto riesgo", url:"img/bitcoin.jpg"},
    {nombre:"inversionista de alto riesgo", url:"img/bolsa.jpg"},
    {nombre:"inversionista de alto riesgo", url:"img/cosechafinanzas"},
    {nombre:"inversionista de alto riesgo", url:"img/futuros.jpa"},
    {nombre:"inversionista de alto riesgo", url:"img/inv.jpg"},
    {nombre:"inversionista de alto riesgo", url:"img/inversion.jpg"},
];
//seleccionar el tablero del html
let tablero = d.querySelector(".tablero");

//funcion para agregar las imagenes al tablero
function agregarImagenes(){
    //recorrer con un foreach las imagenes del array
    imgN1.forEach((img)=>{
        let div = d.createElement("div");
        div.className = "col-3";
        let imagen = d.createElement("img");
        imagen.src = img.url;
        imagen.className = "img-fluid"; 
        div.appendChild(imagen);
        tablero.appendChild(div);
    });
}
agregarImagenes()