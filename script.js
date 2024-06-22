document.getElementById("submit").addEventListener("click", function () {
  const options = document.getElementsByName("answer");
  let selectedAnswer;
  for (const option of options) {
    if (option.checked) {
      selectedAnswer = option.value;
      break;
    }
  }

  const resultElement = document.getElementById("output");
  if (selectedAnswer === "Delhi") {
    resultElement.innerText = "Correct! The capital of India is Delhi.";
    resultElement.style.color = "blue";
  } else {
    resultElement.innerText = "Incorrect. Try again!";
    resultElement.style.color = "red";
  }
});
