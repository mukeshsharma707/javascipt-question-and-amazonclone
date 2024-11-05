const calculateAverage =(arr)=>
{
d= arr.length;
console.log(d);
total=arr.reduce((accum,currEle)=> 
accum+currEle)
//reduce method is same like map method it takes 3 arguments like map method currele, ind, arr name and one extra argument accumulator which hold the data
console.log(total);
output=total/d;
console.log(output);
}



console.log(calculateAverage([5,7,3,9,5]));