const removeDuplicates = (arr) =>
{
    let b=new Set(arr);//new set function is use to create a new array without duplicate values
    //but in the format of object for getting result inthe format of an array we use array with spread operator.
let a= [new Set(arr)];
console.log(a);
return a;

}







console.log(removeDuplicates([2,4,5,5,4]));