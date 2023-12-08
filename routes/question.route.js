const router = require("express").Router();
const QuestionPage = require("../components/QuestionPage");
const { Category, Question } = require("../db/models");

router.get("/:categoryId/question/:questionId", async (req, res) => {
  try {
    const { categoryId, questionId } = req.params;
    
    const question = await Question.findOne({
      where: { categoryId: Number(categoryId), id: questionId },
    });
   if(question) {
    const html = res.renderComponent(QuestionPage, { question });
    res.send(html);}else{ res.redirect('/categories')}
  } catch (error) {
    console.log(error);
  }
});



router.post('/answer', async(req,res)=>{
  const {answer,questionId}=req.body
  console.log(answer,questionId,'+++++++++++++');
  const trueAnswer = await Question.findOne({where:{id:questionId}})
  console.log(trueAnswer.answer,'+_____________');
  if(answer.toLowerCase()===trueAnswer.answer.toLowerCase()){
    return res.json({message:'success', true:trueAnswer.answer})
  }else{
    return res.json({message:'error', true:false})
  }
})





module.exports = router;
