module.exports = function countBs(strB){

    let nombre = 0;

    for( let i of strB){

        if( i === "B" ){

            nombre++;
        }
    }
    return nombre;
}
