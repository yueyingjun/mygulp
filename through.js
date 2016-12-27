var transform=require("stream").Transform;
class throughClass extends transform{
    constructor(opt){
        super(opt);
    }
}
//throughClass 继承了 tranform 这个类
function through(callback) {
    return function (opt, callfun) {
        if (typeof opt == "function"){
            callfun = opt;
            opt = {};
            return callback(opt, callfun);
        }
    }
}
module.exports=through(function(opt,callfun){
    var transformobj=new throughClass({opt});
    transformobj._transform=callfun;
    return transformobj;
})
module.exports.obj=through(function(opt,callfun){
    var transformobj=new throughClass({objectMode:true});
    transformobj._transform=callfun;
    return transformobj
})
module.exports.read=through(function(opt,callfun){
    var transformobj=new throughClass();
    transformobj._read=callfun;
    return transformobj;
})
module.exports.objRead=through(function(opt,callfun){
    var transformobj=new throughClass({objectMode:true});
    transformobj._read=callfun;
    return transformobj;
})
module.exports.write=through(function(opt,callfun){
    var transformobj=new throughClass();
    transformobj._write=callfun;
    return transformobj;
})
module.exports.objWrite=through(function(opt,callfun){
    var transformobj=new throughClass({objectMode:true});
    transformobj._write=callfun;
    return transformobj;
})
