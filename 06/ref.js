var x = 0;

function incrementar() {
    return ++x;
}

var inc = incrementar;
console.log( inc() );
