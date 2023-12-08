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

module.exports = router;
