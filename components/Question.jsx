const React = require("react");
const Layout = require("./Layout");

function Question({ question, user }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="question">{question.question}{question.img}</div>
        <form className="answer">
          <input
            type="text"
            id="question"
            name="answer"
            placeholder="ВВЕДИТЕ ОТВЕТ"
            required
          />
          <button className="answer" type="submit">
            TRY
          </button>
          <button className="next" type="submit">
            СЛЕДУЮЩИЙ ВОПРОС
          </button>
        </form>
        {user && <div className="score">{user.score}</div>}
      </div>
    </Layout>
  );
}
module.exports = Question;
