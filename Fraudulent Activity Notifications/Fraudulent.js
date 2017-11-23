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

function activityNotifications(expenditure, d) 
{
    // Complete this function
    if(d === expenditure.length)
        return 0;
    
    var median;
    var count = 0;
    for(var i=d; i < expenditure.length; i++)
    {
        //compute median
        var c = expenditure.slice(); //shallow copy
        c = c.slice(i-d,i);
        c.sort((a,b) => a-b);
        if(d%2 === 0) //even
            median = (c[d/2 - 1] + c[d/2]) / 2;
        else //odd
            median = c[Math.round(d/2)];
        
        if(expenditure[i] >= 2*median)
            count++;
    }
    
    return count;        
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var d = parseInt(n_temp[1]);
    expenditure = readLine().split(' ');
    expenditure = expenditure.map(Number);
    var result = activityNotifications(expenditure, d);
    process.stdout.write("" + result + "\n");

}
