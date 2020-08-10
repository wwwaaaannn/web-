for(var i=9;i>0;i--){
	var msg=""
	for(var j=i;j<=i&&j>0;j--){
	msg +=(i+" * "+j+" = "+i*j)+(i*j>9?" ":"  ");

}
	console.log(msg);
}
