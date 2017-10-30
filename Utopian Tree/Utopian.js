process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function fullYear(height,n)
{

    for(var i=0; i<n; i++)
    {
        height = (2 * height + 1);
    }
    
    return height;
}

function halfYear(height)
{
    height = 2 * height;
    
    return height;
}

function main() 
{
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var height = 1;
        
        if( n === 0)
        {
            height = 1;
            console.log(height);
            continue;
        }
        
        if(n%2 === 0)
        {
            height = fullYear(height,n/2);
        }
        else
        {
            height = fullYear(1,(n-1)/2);
            height = halfYear(height);
        }
        
        console.log(height);
    }
    
}
