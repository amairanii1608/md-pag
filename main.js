//se crea la funcion
function toggleText(id) {

let x= document.getElementById(id);
    if (x.style.display == "none"){
        x.style.display ="block";
    }
    else{
        x.style.display = "none";
    }
}