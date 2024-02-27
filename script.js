function mincost(arr)
{ 
	arr.sort((a,b)=>a-b);

	let totalCost = 0;

	while(arr.length>1){
	let rope1 = arr.shift()
	let rope2 = arr.shift()
		let combinedRope = rope1+rope2
		totalCost += combinedRope
		arr.push(combinedRope)
		arr.sort((a,b)=>a-b);
		
	}
	return totalCost
//write your code here
// return the min cost
  
}

module.exports=mincost;
