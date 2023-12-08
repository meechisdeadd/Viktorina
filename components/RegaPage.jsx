const React = require("react");

const Layout = require("./Layout");

function RegaPage({ title }) {
  return (
    <Layout title={title}>
      <div className="regaContainer">
        <form action="/" className="regaForm" method="POST">
          <input
            className="inputForm"
            name="name"
            placeholder="Введите своё имя"
          />
          <input
            className="inputForm"
            name="email"
            placeholder="Например@mail.ru"
          />
          <input
            className="inputForm"
            name="password"
            type="password"
            placeholder="Введите свой пароль"
          />
          <button className="submitForm" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = RegaPage;
