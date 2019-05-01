// Using async await

// Array.prototype.even = async function(){
//     var result = await resolveEvenafter2sec(this);
//     console.log(result);
// }
// function resolveEvenafter2sec(array){
//     return new Promise(resolve =>{
//         setTimeout(()=>{resolve(array.filter(num=>num%2==0))},2000);
//     });
// }
//
// Array.prototype.odd = async function(){
//     var result = await resolveOddafter2sec(this);
//     console.log(result);
// }
// function resolveOddafter2sec(array){
//     return new Promise(resolve =>{
//         setTimeout(()=>{resolve(array.filter(num=>num%2!=0))},2000);
//     });
// }

//Using callback

Array.prototype.even = function(){
    setTimeout((result)=>{
        console.log(result);
    }, 500, this.filter(num=>num%2==0));
}
Array.prototype.odd = function(){
    setTimeout((result)=>{
        console.log(result);
    }, 500, this.filter(num=>num%2!=0));
}

console.log("start");
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log("end");