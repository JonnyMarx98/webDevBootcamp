
function average(arr){
    var total = 0;
    for(var i=0; i < arr.length; i++){
        total += arr[i];
    }
    var average = total/arr.length;
    return Math.round(average);
}

var scores = [90,98,89,100,100,86,94];
console.log(average(scores));