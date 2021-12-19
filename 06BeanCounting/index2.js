module.exports = function countNs(strN, L){

    let nombre = 0;

    for( let j of strN){

        if ( j === L ){

            nombre++
        }
    }
    return nombre;
}