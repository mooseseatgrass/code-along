/* Auto complete 
Takes user input and finishes it
Needs a way to get input
need html and input

List of terms -
Mint
Chocolate
Vanilla
Strawberry
Rage
Moose tracks

Need to compare user input to list of terms on each key stroke
If input is a number or special character
Tell user invalid input, should look different than suggestions

If it is valid input
If the letter is in the list, we do something
1. Show matching suggestions
2. Lets user click
3. Completes the word for the user
4. Lets them submit

if its not we want it to do something else
-nothing
*/

var flavors = [
    "Mint",
    "Chocolate",
    "Vanilla",
    "Strawberry",
    "Rage",
    "Moose tracks"
]

function autoComplete(){
    var input = document.getElementById("userInput").value;
    if(isValid(input)){
        var suggestions = document.getElementById("productName");
        suggestions.innerHTML = " ";
        flavors.forEach(function(flavor){
            if(flavor.startsWith(input)){
                // append an option with the flavor
                var option = document.createElement("option");
                option.value = flavor;
                suggestions.appendChild(option);
            }
            
        });
        
    } else{
        console.log("Invalid Input");
        // change to alert when done
    }
}

// got rid of isNumeric function, parseInt didn't work as expected, nor did try catch

function isValid(input){
    var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d+]/g;
    if(regex.test(input)){
        return false;
    } else {
        return true;
    }
}

// var textnode = document.createTextNode(Flavor);
//                 opt.appendChild(textnode);
//                 document.getElementById("myList").appendChild(node);
//                 document.body.appendChild(opt);