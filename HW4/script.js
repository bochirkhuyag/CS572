const fs = require("fs");
const url = require("url");
const http = require("http");
const {Subject} = require('rxjs');
const subject = new Subject();
function checkSystem(reqres){
    const queryData = url.parse(reqres.req.url, true).query.url;
    if(queryData !== undefined){
        try {
            fs.createReadStream(__dirname+""+queryData).pipe(reqres.res);
            //
            /*fs.readFile(__dirname+""+queryData,cb(err,data){
                reqres.res(data);
            });*/
        }
        catch(err){
            reqres.res.end("File not found");
            reqres.res.end(`Handled by process ${pid}`);
        }
    }
}
subject.subscribe(checkSystem);

http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type':'text/plain'});
    subject.next({req : req , res:res});
}).listen(4000);


