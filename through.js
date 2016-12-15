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
module.exports.read=through(function(opt,ck){
    var transformobj=new throughClass();
    transformobj._read=ck;
    return transformobj
})
module.exports.objRead=through(function(opt,ck){
    var transformobj=new throughClass({objectMode:true});
    transformobj._read=ck;
    return transformobj
})

module.exports.write=through(function(opt,ck){
    var transformobj=new throughClass();
    transformobj._write=ck;
    return transformobj
})
module.exports.objWrite=through(function(opt,ck){
    var transformobj=new throughClass({objectMode:true});
    transformobj._write=ck;
    return transformobj
})











