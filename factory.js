var fs=require("fs");
var route=require("path");

class factory{
   constructor(path){
        /*  aa
         *  aa/aa.js
         *  aa.js
         *  aa/**.js
         */
    this.path=path;
    this.basename=route.basename(this.path);
    this.dirname=route.dirname(this.path);
    this.extname=route.extname(this.path);
    this.contents=[];
    this.parse(path);

   }
   parse(path){
       if(!path){
            this.setCon("",null,"");
       }else if(typeof path=="object"){
           this.setCon(path,"object","");
       }else if(typeof path==="string"){
            if(this.extname&&this.path.indexOf("**")<0){
                 try{
                     var con=fs.readdirSync(this.path);
                     this.setCon(con,"file",this.basename);
                 }catch (e){
                     console.log(this.path+"文件不存在");
                 }
            }
            if(this.extname&&this.path.indexOf("**")>-1){
                  var that=this;
                  try{
                     var list=fs.readdirSync(this.dirname);
                     list.forEach(function(name){
                            if(route.extname(name)==that.extname){
                                var con=fs.readFileSync(that.dirname+"/"+name);
                                that.setCon(con,"file",name);
                            }
                     })
                  } catch(e){
                      console.log(this.path+"目录不存在");
                  }
            }
       }
   }

   setCon(con,flag,filename){
       var obj={};
       obj.content=con;
       obj.filename=filename;
       obj.flag=flag;

       this.contents.push(obj);
   }
}

module.exports=(function(){
    return function(path){
       return new factory(path)
    }
})()