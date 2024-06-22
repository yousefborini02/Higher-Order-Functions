// Ex1 
 
//let array=[1,2,3];
function power(array){
    //using map 
let x=array.map((element)=>Math.pow(2,element));
return x;

//using forEach 
// let x=[];
// array.forEach(element => {
//    x.push(Math.pow(2,element));
// });
// return x;

 //using for loop 
// let x=[];
// for (let i = 0; i < array.length; i++) {
//    x.push(Math.pow(2,array[i]));
// }
// return x;


//using for (way 4)
// let x=[];
// for(let element of array){
// x.push(Math.pow(2,element))
// }
// return x;
}

console.log(power(array));


//-------------------------------------------------------------------------------------------------------------------------


// Ex2

let array2=[1,2,3,"Rawan"];

function oddOrEven(array2)
{

    let x=array2.map((element)=>{
        if(isNaN(element))
            {
                return "N/A"
            }
            else {
                if(element %2 ===0 )
                 {   return "even"}
                else{  return "odd"}
             
            }
    })
return x;
}

console.log(oddOrEven(array2));


//-------------------------------------------------------------------------------------------------------------------------


// Ex3

let array3=["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];
array3.forEach(element => {
   console.log(element); 
});


//-------------------------------------------------------------------------------------------------------------------------


// EX4

let array4=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function fizzBuzz(array4){

//     //way 1 using map
// let output=array4.map((element)=>{
//     if(element % 3 ===0 && element %5 ===0){return "Fizz Buzz"}
//     else if(element %3 ===0)
//         {
//             return "Fizz"
//         }
//         else if(element %5===0)
//             {
//                 return "Buzz"
//             }
//             else{
//                 return element;
//             }
// })

// return output;



//using forEach
let output=[];
array4.forEach(element => {
    if(element % 3 ===0 && element %5 ===0){ output.push("Fizz Buzz");}
        else if(element %3 ===0)
            {
                output.push("Fizz");   
            }
            else if(element %5===0)
                {
                    output.push("Buzz");   
                }
                else{
                    output.push(element);   

                }
});
return output;

}

console.log(fizzBuzz(array4));