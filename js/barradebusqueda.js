                            //Buscador de contenido


//Ejecutando funciones
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");

var myArray = ['¡Busca un restaurante en Faca aquí!', '¡Busca el local que desees aquí!', '¿Estas buscando quien te tatué en Faca?', '¡Busca tienda de mascotas en Faca!', '¡Busca tiendas de mascotas en Faca!', '¿Buscas el numero de una droguería?', '¿Necesitas el numero de un taxi?', '¿No tienes el numero de un taxi?', '¡Busca números de taxi en Faca!', '¿Buscas un taxi en Faca?', 'Aquí puedes buscar lo que necesites', 'Intenta buscar: Pizzeria', 'Intenta buscar: Lechoneria', 'Intenta buscar: Taxis'];
var rand = Math.floor(Math.random()*myArray.length);
var rValue = myArray[rand];

inputSearch.placeholder = (rValue)

//Funcion para mostrar el buscador
function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();

    if (inputSearch.value === ""){
        box_search.style.display = "none";
    }

}

//Funcion para ocultar el buscador
function ocultar_buscador(){

    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none";

}


//Creando filtrado de busqueda

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno(){


    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none";
            }

        }else{
            li[i].style.display = "none";
        }

    }

}


var dato_aleatorio = document.querySelector("#datocurioso");

var myArray2 = ['hola'];
var rand2 = Math.floor(Math.random()*myArray2.length);
var rValue2 = myArray2[rand2];
dato_aleatorio.innerHTML = rValue2 
