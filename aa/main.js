var through=require("./through");
var factory=require("./factory");
var fs=require("fs");
class mygulp{
    constructor(){
        this.taskArr=[];
        var that=this;
        that.argv=process.argv[2]||"default";
        process.nextTick(function(){
            that.run()
        })

    }
    src(path){
        return through.objRead(function(){
           this.push(factory(path));
           this.push(null);
        })
    }
    dest(path){
        return through.obj(function(a,b,c){
             fs.writeFileSync(path,a.content)
            c();
        })
    }
    task(taskname,callback){
       var obj={};
        obj[taskname]=callback;
       this.taskArr.push(obj);
    }
    run(){
      var that=this;
      that.taskArr.forEach(function(obj){
         if(Object.keys(obj)[0]==that.argv){
             obj[that.argv]();
         }
      })
    }
    

}

module.exports=new mygulp();