 class University{
     name:String;
     dept:String;
     constructor(name:string,dept:string){
        this.name = name;
        this.dept = dept;
     }

    graduation (year:number){
        console.log(`Graduating ${this.dept} ${year} students`);
    }
}

var mum = new University("MUM","Computer Science");
mum.graduation(2019);