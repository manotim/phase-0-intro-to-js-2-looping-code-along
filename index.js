// Code your solutions in this file
function writeCards(names, event) {
    return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
 }

 function countDown(i)    
{
    // this is an ret string variable that is private to the countdown function
    // you can't access ret from outside of this function
    let ret = "";   

    // your loop should include 0 according to your requirements
    while( i >= 0)
    {
        // here you are appending i to your ret string which you'll return at the end of this function  
        
        console.log(i)

        ret += i;// += is a short hand form of saying ret = ret + i

        // you want to append an empty space for every i except the last one (0)

        // if(i > 0) {
        //     ret += " "; 
        // }

        i--;    // here you are decrementing i
    }
    return ret;
}