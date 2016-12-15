var fs=require("fs");
class factory{
   constructor(path){
    this.path=path;
    this.parse();
   }
   parse(){
      this.content=fs.createReadStream(this.path);
   }
}

module.exports=(function(){
    return function(path){
       return new factory(path)
    }
})()