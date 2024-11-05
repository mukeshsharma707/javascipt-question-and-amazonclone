const findMax= (arr) =>
{
let maxval= Math.max(...arr);// kyoki hum array ko directly math function me add nahi kr sakte
//  isliye humne spread operator ka use kiya.
console.log(maxval);
return maxval;
}






console.log(findMax([1,3,50,-60,1000]));
console.log(findMax([-1,-3,-50,-6,-8]));