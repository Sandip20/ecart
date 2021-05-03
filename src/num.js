
function isSpecialNum(n) {
    let number = Math.pow(n, 2);
    let sum = 0;
    let div = '1';
    for (var i = 0; i < n.toString().length; i++) {
        div += '0'
    }
    div = parseInt(div);
    while (number > 0) {
        sum += number % div;
        number = parseInt(number / div);
    }
    return sum === n
}
let voters=[];
let voter={

};
function vote(name, candidate) {
    if (voters.includes())
        return "Voter has already voted"
    if (voter[candidate]) {
        voter[candidate] += 1;
    } else {
        voter[candidate] = 1;
    }
    voters.push(name);
}

function declareResult(){
 return voter;
}
vote("sandip","C1");
vote("sandip1","C1");
vote("sandip2","C2");
vote("sandip3","C2");
vote("sandip4","C3");
console.log(declareResult())

//console.log(isSpecialNum(77779));