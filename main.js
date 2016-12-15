var through=require("./through");
var factory=require("./factory");
var fs=require("fs");
class mygulp{
    constructor(){

    }
    src(path){
        return through.objRead(function(){
           this.push(factory(path));
           this.push(null);
        })
    }
    dest(path){
        return through.obj(function(a,b,c){
             a.content.pipe(fs.createWriteStream(path))
            c();
        })
    }

}

module.exports=new mygulp();