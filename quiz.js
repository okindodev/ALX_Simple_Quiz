function checkAnswer(){
    const correctAnswer = "4";
   
    const feedback = document.getElementById('feedback')
    const userAnswer = document.querySelector("input[name=quiz]:checked").value
    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done."
    }
    else {
        feedback.textContent = "That's incorrect. Try again!"

    }
    
}
const submit = document.getElementById("submit-answer");
submit.addEventListener("click",checkAnswer);