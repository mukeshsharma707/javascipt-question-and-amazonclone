const findMode=(arr)=>{
  let counts={};
  let maxNum=0;
  let mode;

  for(let element of arr)
  {
    counts[element]=(counts[element]||0)+1;
    if(counts[element]>maxNum)
        maxNum=counts[element];
    mode = element;
  }
  console.log(counts);// could not understand the logic of this mode method
  return mode;
}



console.log(findMode([2,2,4,4,4,1,3]));