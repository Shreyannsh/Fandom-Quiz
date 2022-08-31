var readlineSync = require("readline-sync") 
const chalk = require("chalk")
var score = 0 
var count = 0
var color = chalk.yellowBright.underline.bgRed
if(readlineSync.keyInYN(color("Are you a Big Bang Theory Fan!\n")))
   
{
  console.log("\n")
  var userAnswer = readlineSync.question("May I have your name?\n")
  console.log("\n")
  
console.log(chalk.blue("Welcome " + userAnswer +"\n"))
console.log(chalk.redBright("Awesome, but how big? Lets explore\n")) 
}
else{
  console.log(chalk.cyan("Its cool, Give it a try to the quiz for world's one of the best TV shows!\n "))
  var userAnswer = readlineSync.question("May I have your name?\n")
  console.log("\n\n")
  
console.log(chalk.blue("Welcome " + userAnswer +"\n"))

}
  

var highScores = 
[
  {
    Name: "Manoj",
    Point: "5"
  },
  {
    Name: "Rahul",
    Point: "4"
  },
  {
    Name:"Sumit",
    Point: "3"
  }
]


var quiz = 
[
 {
   Ques: "What is Sheldon Cooper’s IQ? \n\n A- 189 \n B- 220 \n C- 187 \n D- 192 \n",
   Ans: "C"
 },
 {
   Ques: "Penny worked as a waitress at which restaurant? \n\n A- The Cheesecake Factory \n B- The limebake Factory \n C- The Cheesy Factory \n D- The Whisk Factory \n",
   Ans: "A" 
 },
 {
   Ques: "What is Sheldon’s favourite number? \n\n A- 73 \n B- 84 \n C- 76 \n D- 84 \n", Ans : "A"
 },
 {
   Ques: "How many episodes aired during the 12 years of The Big Bang Theory?\n\n A: Record 210! \n B: Record 251! \n C: Record 362! \n D: Record 279! \n",
  Ans: "D" 
  },
 {
   Ques: "In which city Sheldon and Lenord use to live? \n\n A: Pasadena, California \n B: Las Vegas, Nevada \n C: Seattle, Washington \n D: San Francisco, California \n",
   Ans: "A"
  },
  {
    Ques : "Who was the girlfriend of Sheldon?\n\n A: Amy Farrah Fowler \n B: Kaley Cuoco \n C: Melissa Rauch \n D: Jim Parsons\n",
    Ans: "A"
  }
]

// FUNCTION

function play (alpha,beta)
{
  if (alpha === beta)
  {
    console.log(chalk.green("Yes! You are right"))
    score = score +1
    console.log(chalk.cyanBright("your score is:"+ score))
  }
  else
  {
   console.log(chalk.red("Nah! You are wrong"))
   console.log(chalk.cyanBright("your score is:"+ score))
  }
  console.log("___________________________\n") 
} 

// calling function

for(i=0;i<quiz.length;i++)
{
  quest = quiz[i]
  var userAnswer1 = readlineSync.question(quest.Ques + "\n" +"Your answer is:")
  var game = play(userAnswer1,quest.Ans)
}

//printing scores

for (i=0;i<highScores.length;i++)
{
  var high = highScores[i]
  console.log(high.Name + ": " + high.Point + "\n")
  if (score > high.Point){
    count = count +1
  } 
}  
console.log(chalk.magentaBright("Your score is:  " + score + "\n"))
console.log("Thank you for playing")


if (count >= 3)
{
  console.log(chalk.yellowBright("congratulations! You scored highest \n"))
  console.log("DO share screenshort")
}