window.addEventListener("load", init);

function init(){
    megfordit("mokus");
}

function megfordit(szoveg){
    const tomb=[]
    console.log(szoveg);
    for (let index = 0; index < szoveg.length; index++) {
        tomb.push(szoveg[index]);
    }
    console.log(tomb);
}