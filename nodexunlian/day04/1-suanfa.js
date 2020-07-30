for(var j=2;j<10000;j++){
	var sum =1;
	for(var i=2;i<=j/2;i++){
	if(j%i == 0){
	sum = sum + i;
	}
}
	if(sum == j) {
	console.log(sum);
}

}
