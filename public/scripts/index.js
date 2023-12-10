const answerBtn = document.querySelector(".answerBtn");

const answerForm = document.querySelector(".answer");
console.log(answerForm);
if (answerForm) {
  answerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const { answer } = e.target;
    const data = { answer: answer.value, questionId: answerForm.id };
    const response = await fetch("/question/answer", {
      method: "Post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();
    console.log(body);
    // answer.innerHTML = body.true
    if (body.message === "success") {
      document
        .querySelector(".answerDiv")
        .insertAdjacentHTML("afterend", "М О Л О Д Е Ц!");
    } else {
      document.querySelector(".answerDiv").insertAdjacentHTML("afterend",`Неправильно!, Правильный ответ: ${body.true}`) ;
    }
  });
}
