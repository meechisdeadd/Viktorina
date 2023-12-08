const answerBtn = document.querySelector('.answerBtn')

const answerForm = document.querySelector('.answer')
console.log(answer);
if(answerForm) {
    answerForm.addEventListener("submit", async(e) => {
        e.preventDefault()

        const{answer}=e.target
        const data = {answer:answer.value, questionId:answerForm.id}
        const response = await fetch('/question/answer', {
            method:'Post',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()
  
// answer.innerHTML = body.true
   if(body.message ==='success') {
  document.querySelector('.answerDiv').innerHTML = 'ПРАВИЛЬНО'
   }else{
    
   document.querySelector('.answerDiv').innerHTML = `НЕ ПРАВИЛЬНО, ПРАВИЛЬНЫЙ ОТВЕТ ${body.true}`
   }
    })
}