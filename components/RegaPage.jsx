const React = require('react');

const Layout = require('./Layout');

function RegaPage({ title }) {
  return (
    <Layout title={title}>
      <div>
        <form action="/" className="regaForm" method="POST">
          <input name="name" placeholder="name" />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </Layout>
  );
}
module.exports = RegaPage;
