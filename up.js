var thorugh=require("./through");

module.exports=(function(){
    return function(){
       return thorugh.obj(function(a,b,c){
            a.contents.forEach(function(obj){
               obj.content= obj.content.toString().toUpperCase();
            })
           this.push(a);
           c();

        })
    }
})()
