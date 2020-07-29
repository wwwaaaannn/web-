
for(var j=9;j>=1;j--){
var msg = ""	
 for(var i=1; i<=j; i++){
	msg +=(i+" * "+j+" = "+i*j)+(i*j>9?" ":"  ");
}
console.log (msg);
}
