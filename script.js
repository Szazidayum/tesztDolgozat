window.addEventListener("load", init);

function init(){
    megfordit("mokus");
}

function megfordit(szoveg){
    var tomb=szoveg.split("");
    console.log(szoveg);
    console.log(tomb);
    var forditottTomb=tomb.reverse();
    var ujSzo=forditottTomb.join("");
    console.log(ujSzo);
    
    return ujSzo;
}