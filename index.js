const { X509Certificate } = require('crypto')

const prompt = require('prompt-sync')()

//introdution to game
let name = prompt("Create a username")
console.log("Welcome to my modeling game, " + name)
function playgame() {

  let gameState = "start"

  let favBrand = ["Nike", "Gucci", "yeezy"]
  console.log(favBrand)
  let Model1 = prompt("What's your favrite brand?")
  console.log("You are now sponsored by, " + Model1)

  let modelChoice = ["model1", "model2", "model3"]
  console.log(modelChoice)
  let Option1 = prompt("Select a model")
  console.log("You have selected model, " + Option1)

  let models = []

  let model1 = {
    size: "Small",
    color: "Red",
    hair: "Straight",
    brand: "Nike"
  }
  models.push(model1)
  let model2 = {
    size: "Medium",
    color: "Brown",
    hair: "Curly",
    brand: "Gucci"
  }
  models.push(model2)
  let model3 = {
    size: "Big",
    color: "Ginger",
    hair: "Afro",
    brand: "Yeezy"
  }
  models.push(model3) // user selects their dream model apperance

  let SelectedModelIndex = Option1 - 1
  let selectedModel = models[SelectedModelIndex]
  console.log(selectedModel)
  let meals = ["pizza", "burger", "salad", "wings"]
  console.log(meals)
  let meal = prompt("It's important to have some source of food before modeling, what will you eat?")
  console.log("Enjoy, Your meal is " + meal)

  let action = prompt("Its time to go on stage, are you ready?")
  let goTime = prompt("Pick a pose to amaze the audience")
  function pickPose() {
    let poses = ["warrior pose", "hand on hip pose", "peace sign pose"]
    console.log(poses)
    let userInput = prompt("Select a pose")
    console.log("You have selected, " + poses[userInput])
    for (let i = 0; i < 5; i++) {
      console.log("strike a pose")
    }
  }
  pickPose()
  function levelUp() {
    console.log("Nice job!, the audience loved your pose you received a 6/10, keep practicing for a 10. ")
    let proceed = prompt("would you like to level up")
    let modelingScore = 0
    if (modelingScore >= 1000) {
      console.log("Congrats! you acheived a high modeling score and leveled up")
    } else {
      console.log("Keep practicing, you can improve your modeling skills")
    }
    modelingScore = 830
    let currentLevel = 50
    let points = 1000

  }
  levelUp()


//Tracking users level and progress
  console.log("You are at level 50 and currently have 1000 points")
  console.log("You can shop at the inventory, would you like to?")


//Company investing in models product user will showcase
  let shoppingOptions = ["Hair products", "Skincare products", "Apperal"]
  console.log(shoppingOptions)
  let userChoice = prompt("What would you like to invest in?")
  console.log("You have invested in, " + shoppingOptions[userChoice])

  console.log("Wow, you've come so far! let's take things to the next level so you can display your very own merchandice/products. Below is a q/a the investors have presented for you. Make sure to get these questions right in order to level up!")


  const questions = [
    "Where did the fashion industry originate??",
    "What is victoria secret?",
    "who was the first black woman to appear on the covers of Time and Vogue France?",
  ];

  const answers = [
    "Paris, France",
    "American lingerie, clothing and beauty retailer",
    "Naomi Campbell",
  ];
  let score = 0

  function askQuestion(index) {
    console.log(questions[index])
    let guess = prompt("Guess the answer")
    return guess

  }
  function checkAnswer(index, guess) {
    console.log("The answer is", answers[index])
    if (guess === answers[index]) {
      score += 1
      console.log("You've got it correct")

    } else {
      console.log("Sorry you've got it wrong")

    }
  }
  function endGame() {
    for (let i = 0; i < questions.length; i++) {
      let guess = askQuestion(i)
      checkAnswer(i, guess)

    } console.log("Your final score is " + score)

  }
  endGame()
  console.log("You received a 3/3 and got your modeling certifiate")

  let playAgain = prompt("Do you want to play again?")
  while (true) {
    if (playAgain == "yes") {
      playgame()
    } else {
      console.log("goodbye!")
    }
  }
}
  // user piccks apose
  //audience rates
  // print if they liked it or not


  let playerScore = []
  let rating = 9
  playerScore.push(rating)

  let rating2 = 6
  playerScore.push(rating2)



  playgame()