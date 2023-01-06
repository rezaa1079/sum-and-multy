function ML(a,b) 
{
	var a=Number(prompt("a"))
	var b=Number(prompt("b"))





    console.log("The Numbers are "  + a +"," + b)
    console.log("the Numbers between are :")

    for (var i = a; i <=b; i++)
    {

        console.log(i)
    }

	function FA(a) 
{
    let fact = 1;

    for (let i = 2; i <= a; i++){

        if(Number.isSafeInteger(fact*i)){
            fact = fact * i;
        }
        else {
           
            let factxi = "0"; 
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());  
            }
            fact = factxi; 
        }
    }

    return fact;
}
// --------------------------
	function FA(b) 
{
    let fact = 1;

    for (let i = 2; i <= b; i++){

        if(Number.isSafeInteger(fact*i)){
            fact = fact * i;
        }
        else {
           
            let factxi = "0"; 
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());  
            }
            fact = factxi; 
        }
    }

    return fact;
}


var y=FA(b)
var x=FA(a)/a

var z=y/x
console.log("The Multipy = " + z)
console.log("The Sum = " + (a+b)*(b-a+1)/2)






}

ML();


