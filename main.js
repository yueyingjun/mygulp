var through=require("./through");
var factory=require("./factory");
var fs=require("fs");
var route=require("path");
var gaze=require("gaze");  //gaze插件检测有没有做过更改
var makedir=require("./makedir");
class mygulp {
    constructor() {
        this.taskArr = [];
        var that = this;
        that.argv = process.argv[2] || "default";
        process.nextTick(function () {
            that.run();
        })
    }
    src(path) {
        console.log(path);
        return through.objRead(function () {
            this.push(factory(path));
            this.push(null);
        })
    }
    dest(path){
        return through.obj(function(a,b,c){
            fs.stat(path,function(error,data){
                if(error){
                    console.log("文件不存在");
                    makedir(path);
                }else{
                    console.log("文件存在");
                }
                a.contents.forEach(function(obj){
                    if(obj.flag==null){
                        console.log("空的")
                    }else if(obj.flag=="object"){
                        console.log(obj.content);
                    }else if(obj.flag=="file"){
                        fs.writeFileSync(route.normalize(path+"/"+obj.filename),obj.content);
                    }
                })
                c();
            })
        })
    }
    task(taskname, callback) {
        var obj = {};
        obj[taskname] = callback;
        this.taskArr.push(obj);
    }
    run(){
        var that = this;
        this.taskArr.forEach(function (obj,index) {
            if (Object.keys(obj)[0] == that.argv) {
                obj[that.argv]();
            }
        })
    }

    watch(path, tasks) {
        var that = this;
        gaze(path, function () {
            this.on('changed', function () {
                console.log(1);
                tasks.forEach(function (taskname) {
                    that.taskArr.forEach(function (obj) {
                        if (Object.keys(obj)[0] == taskname) {
                            obj[taskname]();
                        }
                    })
                })
            });
        })
    }
}
module.exports=new mygulp();