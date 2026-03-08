export const listeningData = [

{
id:"1",
title:"Request Your Boss",
audio: require("../../assets/audio/request-boss.mp3"),

transcript:
"Good morning. Can I take Friday off? I have a family function.",

questions:[
{
question:"What does the employee ask for?",
options:["Holiday","Salary","Promotion","Transfer"],
answer:"Holiday"
},
{
question:"Which day does the employee ask?",
options:["Monday","Friday","Sunday","Tuesday"],
answer:"Friday"
}
]
},

{
id:"2",
title:"Coffee Shop",
audio: require("../../assets/audio/coffee-shop.mp3"),

transcript:
"Hello, I would like a cup of coffee and a sandwich please.",

questions:[
{
question:"What drink does the customer order?",
options:["Tea","Coffee","Juice","Milk"],
answer:"Coffee"
},
{
question:"What food does the customer order?",
options:["Pizza","Burger","Sandwich","Rice"],
answer:"Sandwich"
}
]
}

];