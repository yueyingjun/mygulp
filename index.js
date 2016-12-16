var mygulp=require("./main.js");
var up=require("./up.js");




mygulp.task("default",function(){
    mygulp.src("main.js").pipe(up()).pipe(mygulp.dest("aa.js"));
})
mygulp.watch("aa/*",["default"]);













