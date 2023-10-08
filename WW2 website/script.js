const quiz = [
	{
		no: '1',
		correctAnswers: ['1939'],
	},
	{
		no: '2',
		correctAnswers: ['Hitler'],
	},
	{
		no: '3',
		correctAnswers: ['1945'],
	},
];

function getCorrectChecks(questionDivId, questionNo) {
	var divQuestion = document.getElementById(questionDivId);
	var checkboxes = divQuestion.getElementsByClassName('form-check-input');
	var correctAnswers = [];
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			if (quiz[questionNo].correctAnswers.includes(checkboxes[i].value)) {
				console.log('Raspuns corect: ' + checkboxes[i].value);
				// adaugam raspunsul corect in lista marcata
				correctAnswers.push(checkboxes[i]);
			} else {
				// orice varianta gresita anuleaza toate raspunsurile corecte selectate
				correctAnswer = [];
				return 0;
			}
		}
	}
	console.log(correctAnswers);
	return correctAnswers.length;
}

function validateQuiz() {
	var correctAnswers = 0;
	for (var i = 0; i < quiz.length; i++) {
		correctAnswers += getCorrectChecks('question' + (i + 1), i);
	}
	alert('Raspunsuri corecte: ' + correctAnswers);
}
