// function SUM() 
// {
// 	var a =Number(prompt("a"));
// 	var b =Number(prompt("b"));

// 	for (var i = a; i <=b; i++) 
// 	{
// 		console.log(i)
// 	}
// 	console.log("The sum of all is")
// 	console.log((a+b)*(b-a+1)/2)
// 	alert((a+b)*(b-a+1)/2)



// }
// SUM();

// const permutator = (inputArr) => {
//   let result = [];

//   const permute = (arr, m = []) => {
//     if (arr.length === 0) {
//       result.push(m)
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr.slice();
//         let next = curr.splice(i, 1);
//         permute(curr.slice(), m.concat(next))
//      }
//    }
//  }

//  permute(inputArr)

//  return result;
// }


function ML(a,b) 
{
	var a=Number(prompt("a"))
	var b=Number(prompt("b"))

// --------------------------
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


