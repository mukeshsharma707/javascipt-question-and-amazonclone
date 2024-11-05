const sortAsending = (arr) =>
{
    sortArr=arr.sort((a,b)=>a-b);
    console.log(sortArr); //sort method string ko properly sort karta h numbere ka nahi.
}







console.log(sortAsending([5,3,10,8]));

console.log(sortAsending([5,3,1,8]));