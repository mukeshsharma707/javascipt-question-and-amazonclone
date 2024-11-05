const passwordValidation=(password)=>
{
    let hasuppercase=false;
    let haslowercase=false;
    let hasnumber=false;
    for(let char of password)
    {
        if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90)
        {
            hasuppercase=true;
        }
        else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)
        {
            haslowercase=true;
        }
        else if(!isNaN(Number(char)))
        {
hasnumber=true;
        }

    }

    if(!hasuppercase || !haslowercase || !hasnumber || password.length<8)
    {
        return false;
    }
    else
    {
        return true;
    }
}

console.log(passwordValidation("hello23323"));