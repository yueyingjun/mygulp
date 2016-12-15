var through=require("./through");
through.objRead(function(){
   this.push("1")
}).pipe(through(function(a,b,c){
    console.log(a.toString());
}))





