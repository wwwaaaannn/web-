 for(var i=1;i<=9;i++){
	var msg=""
	for(var j=i;j<10&&j>=i;j++){
	msg +=(i+" * "+j+" = "+i*j)+(i*j>9?" ":"  ");
	}
console.log(msg);
}

