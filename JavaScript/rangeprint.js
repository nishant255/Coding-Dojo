/**
 * Created by Nishant on 12/19/2016.
 */

function printRange(start, end, skip) {
    for(i = start; i < end; i += skip){
        console.log(i);
    }
    return 0;
}

console.log(printRange(2, 10, 2));