
function average(arr){
    var answer = 0;
    for(var i=0;i<=arr.length;i++){
           answer += arr[i];
    }
    return(Math.round(answer/arr.length));
}
function average2(scores){
    var total=0;
    scores.forEach(function(score){
        total+=score;
        
    });
    return(Math.round(total/scores.length))
};

var scores = [90, 98, 89, 100, 86, 94]
console.log(average(scores));
average2(scores);