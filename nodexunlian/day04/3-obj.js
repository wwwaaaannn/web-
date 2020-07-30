var obj ={
    name:"terry",
    age:12,
    sayName:function(){
        console.log("my name is",this.name);
    }
}

console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
var name = "name";
console.log(obj[name]);

for(var key in obj){
    console.log(key,obj[key]);

}
