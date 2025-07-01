document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    const answersDiv = document.getElementById('answers');
    const answer = `You asked: "${question}". Here is the answer...`; // Add your logic to generate answers
    const answerElement = document.createElement('div');
    answerElement.textContent = answer;
    answersDiv.appendChild(answerElement);
    document.getElementById('question').value = ''; // Clear the input
});
