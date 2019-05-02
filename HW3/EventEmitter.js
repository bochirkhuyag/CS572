const dns = require("dns");
const util = require("util");
/*
dns.resolve4('www.mum.edu',(err,address)=>{
    if(err) throw err;
    console.log(`addresses: ${address}`);
})
*/
const dnsResolve4Async = util.promisify(dns.resolve4)
//dnsResolve4Async('www.mum.edu').then(result => console.log(result))


async function getAddress(){
    const address = await dnsResolve4Async('www.mum.edu');
    console.log(address);
}
//getAddress();


const eventEmitter = require('events')
class Gym extends eventEmitter{
    constructor(){
        super();
    }
    boom(str){
        this.emit('boom',str);
    }
}
var gym = new Gym();
gym.on('boom',(text)=> {setInterval(()=>console.log(text),1000)});
//gym.boom("Athlete is working out");

const fs = require('fs');
const path = require('path');
const http = require('http');
console.log("Start time :"+new Date().getTime());
const readable = fs.readFileSync(path.join(__dirname,'calma.mp4'));
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'video/mp4'});
    res.end(readable);
    console.log("End time :"+new Date().getTime());
}).listen(4000);





