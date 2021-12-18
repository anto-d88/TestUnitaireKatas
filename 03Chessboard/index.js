module.exports = function echequier(){

let ligne = 8;

let testObjet = {test:""}

let diez = ""

let array = []

    for( i = 1; i <= ligne; i++){

        for ( j = 1 ; j <= ligne ; j++){

            if((i+j)%2 == 0){

                diez += " "  

            }

            else{

                diez += "#"

            }

            // ((i+j)%2 == 0 ? diez += " " : diez += "#")

        }

        diez += "\n";

        testObjet.test = diez;

        array.push(testObjet);

    }

    return array;

}