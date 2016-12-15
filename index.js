var mygulp=require("./main.js");
var up=require("./up.js");
mygulp.src("./**.js").pipe(up()).pipe(mygulp.dest("aa.js"));









