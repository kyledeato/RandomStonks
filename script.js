function generateRandomNum (num){
    //returns random number from 0 to 1
    return Math.floor(Math.random() * num);
}

const answers = {
    stocks: ["gamestop", "amc", "apple", "Tesla", "Amazon", "Facebook", "Roku", "Spotify", "Disney"],
    buys: ["100 shares", "10 shares", "1 share", "3 shares", "1 call", "3 puts", "2 puts", "your entire portfolio"],
    reason: ["trust me bro", "it's a good idea", "yolo", "you're a chad", "you'll make money", "you have extra buying power"]
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
            questions.push(`And should buy ${answers[prop][random]}`);
            break;
        case 'reason':
            questions.push(`Because ${answers[prop][random]}`);
            break;
    }
}

function format(x){
    let formatted = questions.join('\n');
    console.log(formatted);

}
format(questions);
