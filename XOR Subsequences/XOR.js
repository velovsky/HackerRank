/*
*	This algorithm works well for test-cases: #1-#8
* This solution needs to be improved (e.g: handle > 100k elements)
* in order to pass the remaining cases.
*/

function processData(input) 
{
    //Enter your code here
    //read input
    var size = 0;
    var buffer = '';
    var in_array = [];
    for(var i=0; i < input.length; i++)
    {
        buffer += input[i];
        if(input[i] === '\n') //new line
        {
            in_array.push(parseInt(buffer));
            var buffer = '';
        }
        else if(i === input.length-1)
            in_array.push(parseInt(buffer));
    }
    
    size = in_array[0];
    in_array.splice(0,1);
    
    var freq_array = [];
    for(var i=0; i < in_array.length; i++)
    {
        for(var j=0; j < size-i; j++)
        {
            var buffer = "";
            buffer = in_array[j];
            for(var k=0; k < i; k++)
            {
              buffer = buffer ^ in_array[j+k+1];
            }
           
            var xor = buffer;
            
            //frequency
            if(freq_array[xor] === undefined)
                freq_array[xor] = 1;
            else
                freq_array[xor] = freq_array[xor] + 1;
        }
    }
    
    //find max and return index
    var max_freq = freq_array.reduce((a,b) => {return Math.max(a,b);});
    var ind_freq = freq_array.findIndex((element) => {return element === max_freq;});

    console.log(ind_freq + " " + max_freq);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
