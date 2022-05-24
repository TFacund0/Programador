function getID (id) {
    return document.getElementById(id).value;
}

function innerHTML(id,result) {
    return document.getElementById(id).innerHTML=result;
}

function contador(){
    setInterval(function() {
        var c = getID("txt");
        if (c.length>100){
            innerHTML("vista","El limite es de 100 caracteres")
        }else{
            innerHTML("vista", c.length)
        }
    }, 0000);
}