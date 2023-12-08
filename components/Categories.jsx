const React = require('react');
const Layout = require('./Layout');

function Categories({ categories, user }) {
  return (
    <Layout>
      <div className="helloScore">
        <h4>{`Hello,${user.name}!  Let's go! Score:${user.score}`}</h4>
      </div>
      <div className="container1">
        <h3>ВЫБЕРИТЕ КАТЕГОРИЮ</h3>
        {categories.map((category) => (
          <div className="catDiv" key={category.id}>
            <a
              href={`/question/${category.id}/question/${category.Questions[0].id}`}
            >
              <p>{category.name}</p>
              <img
                src={category.img}
                style={{ width: '350px', borderRadius: '5px', margin: '5px' }}
              />
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = Categories;
