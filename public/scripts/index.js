const answerBtn = document.querySelector('.answerBtn')

const answerForm = document.querySelector('.answer')

if(answerForm) {
    answerForm.addEventListener("submit", async(e) => {
        e.preventDefault()

        const{answer}=e.target
        const data = {answer:answer.value}
        const response = await fetch('/', {
            method:'Post',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()
        
    })
}