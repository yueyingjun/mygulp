var transform=require("stream").Transform;

class throughClass extends transform{
       constructor(opt){
           super(opt);
       }
}

function through(callback){
   return function(opt,ck){
       if(typeof opt=="function"){
           ck=opt;
           opt={};
       }

       return callback(opt,ck);
   }
}



module.exports=through(function(opt,ck){
    var transformobj=new throughClass(opt);
    transformobj._transform=ck;
    return transformobj
})
module.exports.obj=through(function(opt,ck){
    var transformobj=new throughClass({objectMode:true});
    transformobj._transform=ck;
    return transformobj
})










