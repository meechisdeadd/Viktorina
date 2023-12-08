const React = require('react');
const Layout = require('./Layout');

function QuestionPage({ question, user }) {
  return (
    <Layout>
      <div className="container1">
        <div className="question">
          <p>{question.question}</p>
          <img src={question.img} alt="" />
        </div>
        <form className="answer">
          <input
            type="text"
            id="question"
            name="answer"
            placeholder="ВВЕДИТЕ ОТВЕТ"
            required
          />{' '}
          <button className="answerBtn" type="submit">
            TRY
          </button>
        </form>
      </div>

      <a href={`/question/${question.categoryId}/question/${question.id + 1}`}>
        <button className="next" type="submit">
          СЛЕДУЮЩИЙ ВОПРОС
        </button>
      </a>

      {user && <div className="score">{user.score}</div>}
    </Layout>
  );
}
module.exports = QuestionPage;
