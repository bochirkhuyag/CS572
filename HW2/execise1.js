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

/*
1.order of execution between setImmediate(callback) and setTimout(callback, 0)
is varying depending on performance and which phase event loop is executing.
However inside I/O operation setImeddiate always runs first because setImmediate runs at
check phase which is after poll phase.
2. process.nextTick is runs before any other phases it's not actually part of event loop it's c++ handler
which is checked after every phase of event loop.
3. Node built in modules
stream - handle streaming data
fs - work with files
http -to make node.js act as https server
https - to make node.js act as https server
zlib - compress or decompress file
util - access utility functions
events - handle events
buffer - work with binary data
net - create server and client
path - handle file path

 */