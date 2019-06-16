const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const containerTitleElement = document.getElementById("container-title")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex
let questionCounter = 0

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
	currentQuestionIndex++
	setNextQuestion()
})

function startGame() {
	// Hide the start button
	startButton.classList.add("hide")
	// Shuffle the questions array
	shuffledQuestions = questions.sort(() => Math.random() - .5)
	// Shuffle the answers of each question (map each object of the array\
	// to a version of that object where the order of the `answers` element\
	// has been shuffled)
	shuffledQuestions = shuffledQuestions.map(questionObj => {
		// Create a new object to hold the updated data (same `question` but\
		// shuffled `answers`)
		let updatedQuestion = {}
		updatedQuestion.question = questionObj.question
		updatedQuestion.answers = questionObj.answers.sort(() => Math.random() - .5)
		return updatedQuestion
	})
	// We start with the first question, that is, index zero
	currentQuestionIndex = 0
	// Show the question elements
	questionContainerElement.classList.remove("hide")
	// Set up the question answers
	setNextQuestion()
}

function setNextQuestion() {
	// Update the number of the question
	questionCounter++
	containerTitleElement.innerText = `Question #${questionCounter}`
	// Reset the question container to remove the elements related to\
	// the question that was just answered
	resetState()
	// Display everything related for the next question
	showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement("button")
		button.innerText = answer.text
		button.classList.add("btn")
		// Add a `data` attribute to the element. We only do it for the correct\
		// answer so it's easier to find it in the HTML
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener("click", selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}

function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add("hide")
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children)
		.forEach(button => {
			setStatusClass(button, button.dataset.correct)
		})
	if (shuffledQuestions.length > currentQuestionIndex+1) {
		nextButton.classList.remove("hide")
	}
	else {
		startButton.innerText = "Restart"
		startButton.classList.remove("hide")
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add("correct")
	}
	else {
		element.classList.add("wrong")
	}
}

function clearStatusClass(element) {
	element.classList.remove("correct")
	element.classList.remove("wrong")
}


// "Database" of questions and answers
const questions = [
	{
		question: `What is 2 + "2" in JavaScript?`,
		answers: [
			{text:"4", correct:false},
			{text:"22", correct:true},
			{text:"8", correct:false},
			{text:"1", correct:false},
		]
	},
	{
		question: `What is the type of 10 + ""?`,
		answers: [
			{text:"number", correct:false},
			{text:"object", correct:false},
			{text:"string", correct:true},
			{text:"boolean", correct:false},
		]
	},
	{
		question: `What is the result of 3 === "3"?`,
		answers: [
			{text:"true", correct:false},
			{text:"false", correct:true},
			{text:"null", correct:false},
			{text:"undefined", correct:false},
		]
	}
]