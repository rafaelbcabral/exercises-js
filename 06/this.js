class Exemplo {

    constructor() {
        this.x = 10;
    }

    incrementar() {
        return ++this.x;
    }

    incrementar2 = () => {
        return ++this.x;
    };
}

const a = () => {
    console.log( this );
};
a();

const exemplo = new Exemplo();
console.log( exemplo.incrementar() );

const inc = exemplo.incrementar.bind( exemplo );
console.log( inc() );

const inc2 = exemplo.incrementar2;
console.log( inc2() );
console.log( inc2() );