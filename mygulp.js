var mygulp=require("./main.js");
var up=require("./up.js");
mygulp.task("default",function(){
    mygulp.src("aa/**.js").pipe(up()).pipe(mygulp.dest("bb/cc"));
})