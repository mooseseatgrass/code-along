// print all prime number up to 1000
// Prime number - only divisable by 1 and itself
// Print - console.log();
// Count - for (var i = 0; i < 1000; i++)

function printPrimes(){
    for (var i = 0; i < 1000; i++){
        if (i >= 0 && i <= 3){
            console.log(i);
            } else if(i % 2 != 0 || i % 3 !=0){
            // the number is not 1 or 2 and is odd and divisable by 3
            var j = 5;
            while(j*j <= i){
                if(i%j === 0 || i%(j+2) === 0)
                    return false;
                }
                j =+ 6;
                console.log(i);
        }
    }

}