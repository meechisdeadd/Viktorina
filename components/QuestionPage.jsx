const React = require('react');
const Layout = require('./Layout');

function QuestionPage({ question, user }) {
  return (
    <Layout>
      <div className="container1">
        <div className="question">
          <p style={{ fontSize: '30px' }}>{question.question}</p>
          <img src={question.img} className="image_quest" alt="" />
        </div>

        <form className="answer" id={question.id}>
          <form className="answer" data-id={question.id}>
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
        </form>
      </div>

      <a href={`/question/${question.categoryId}/question/${question.id + 1}`}>
        <button className="next" type="submit">
          СЛЕДУЮЩИЙ ВОПРОС
        </button>
      </a>

      {user && <div className="score">{user.score}</div>}
      <p className="answerDiv"></p>
    </Layout>
  );
}
module.exports = QuestionPage;
