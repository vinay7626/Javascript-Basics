document.getElementById("submit").addEventListener("click", function () {
  const options = document.getElementsByName("answer");
  let submittedAnswer;
  for (const option of options) {
    if (option.checked) {
      submittedAnswer = option.value;
      break;
    }
  }

  const outputElement = document.getElementById("output");
  if (selectedAnswer === "Delhi") {
    outputElement.innerText = "Correct! The capital of India is Delhi.";
    outputElement.style.color = "blue";
  } else {
    outputElement.innerText = "Incorrect. Try again!";
    outputElement.style.color = "red";
  }
});
