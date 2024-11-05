const findMin=(arr)=>{
    let result=arr.sort((a,b)=>{
if(a<b)
return -1; /// here we can use either 1 and -1 if we use 1 then it will work for positive numbers only
// but if we use -1 then it will show - values also
    })
    return result[0];
} 


console.log(findMin([5,11,-7,8])); 