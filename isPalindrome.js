const isPalindrome =(str)=>
{
let nstr=str.split("").reverse().join("");
console.log(nstr);
if(nstr===str)
{
    return true;
}
else{
    return false;
}
}






console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
