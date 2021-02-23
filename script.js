function generateRandomNum (num){
    //returns random number from 0 to 1
    return Math.floor(Math.random() * num);
}

//store data
const answers = {
    stocks: ["Gamestop", "Amc", "Apple", "Tesla", "Amazon", "Facebook", "Roku", "Spotify", "Disney"],
    buys: ["buy 100 shares", "buy 10 shares", "buy 1 share", "buy 3 shares", "buy 1 call", " buy 3 puts", "buy 2 puts", "yolo your entire account"],
    reason: ["trust me bro", "it's a good idea", "you're a chad", "you'll make money", "fuck it", "daddy elon said so"]
}

//store questions in array
let questions = [];

//iterate on object
for (let prop in answers){
    let random = generateRandomNum(answers[prop].length);

    switch(prop){
        case 'stocks':
            questions.push(`You should invest in ${answers[prop][random]}`);
            break;
        case 'buys':
            questions.push(`And should ${answers[prop][random]}`);
            break;
        case 'reason':
            questions.push(`Because ${answers[prop][random]}`);
            break;
    }
}
//format the array
function format(x){
    let formatted = questions.join('\n');
    console.log(formatted);

}
format(questions);
