var fs=require("fs");
var route=require("path");
class makedir{
    constructor(path){
        this.make(path);
    }
make(path){
    var arr=path.split(route.sep);
    var newarr="";
    arr.forEach(function(name,index){
        newarr+=name+"/";
        fs.mkdirSync(newarr);
    })
}
}
module.exports=(function(){
    return function(path){
        return new makedir(path);
    }
})();