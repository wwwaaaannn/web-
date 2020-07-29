for(var i=1;i<10;i++){
	var msg=""
	for(var j=1;j<=i;j++){
	msg +=(i+" * "+j+" = "+i*j)+(i*j>9?" ":"  ");	
}	
console.log(msg);
}

