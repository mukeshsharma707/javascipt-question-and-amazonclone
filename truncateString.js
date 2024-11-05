
const truncateString=(str,num)=>{
    let result=(num<=0)? str: str.slice(0,num).concat("...");
// let substr=str.slice(0,num);
// console.log(substr);

return result;

}


console.log(truncateString("welcome to thapa technical",5));