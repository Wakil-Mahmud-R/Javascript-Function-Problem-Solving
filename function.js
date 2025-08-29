// problem 1

function totalFine( fare ) {

    if (typeof fare !== "number" || fare <=0 ){
        return "Invalid"
    }

    surCharge = fare * 0.20;
    serviceCharge = 30;
    totalPenalty = fare + surCharge + serviceCharge;

    return totalPenalty;
}


// problem 2

function  onlyCharacter( str ) {
        if (typeof str !== "string"){
            return "Invalid"
        }

        let result = str.split(" ").join("").toUpperCase();

        return result;

}

// problem 3
function  bestTeam( player1, player2 ) {

    if (typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid"
    }
          
    let total1 = player1.foul + player1.cardY + player1.cardR;
    let total2 = player2.foul + player2.cardY + player2.cardR;


    if (total1<total2){
        return player1.name;
    }
    else if (total2<total1) {
        return player2.name;
    }
    else{
        return "Tie"
    }


}


// problem 4


function  isSame(arr1 , arr2 ) {

    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }
    if ( arr1.length !== arr2.length){
        return false;
    }

    for (let i=0; i<arr1.length; i++){
        if ( arr1[i] !== arr2[i]){
            return false;
        }
    }


    return true;
}


// problem 5


function  resultReport( marks ) {

    if (!Array.isArray(marks)){
        return "Invalid";
    } 

    if (marks.length === 0){
        return { finalScore: 0 , pass: 0, fail: 0 };
    }


    let total = 0;
    let pass = 0;
    let fail = 0;


    for(const mark of marks){
        total = total + mark;
        if (mark>=40){
            pass++;
        }
        else{
            fail++;
        }
    }
    let avg = Math.round(total/marks.length);

    return { finalScore: avg, pass: pass, fail: fail };

}
