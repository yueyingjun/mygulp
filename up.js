var thorugh=require("./through");

module.exports=(function(){
    return function(){
       return thorugh.obj(function(a,b,c){
            a.content=a.content.toString().toUpperCase();
            this.push(a);
            c();

        })
    }
})()
