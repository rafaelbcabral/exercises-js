function clonar( obj ) {
    // return structuredClone( obj );
    return { ...obj }; // Razo (shallow)
}

console.log( clonar( { energia: 100, mana: 50, classe: 'Bárbaro' } ) );