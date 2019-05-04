const os = require("os");
const {Subject} = require('rxjs');

const subject = new Subject();
function checkSystem(){
    console.log("Checking your system");
    const bytes = os.totalmem();
    const RamInGB = Math.round(bytes / Math.pow(1024, parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))), 2);
    if(RamInGB<4.00){
        console.log("this app needs at least 4GB of ram");
    }
    else{
        if(os.cpus().length<2){
            console.log("Processor is not supported");
        }
        else{
            console.log("System is checked successfully.");
        }
    }
}
subject.subscribe(checkSystem);
subject.next();

