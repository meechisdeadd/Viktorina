const React = require("react");
const Layout = require("./Layout");

function Categories({ categories }) {
  return (
    <Layout title={title}>
      <div className="container">
        <h3>ВЫБЕРИТЕ КАТЕГОРИЮ</h3>
        {categories.map((category) => (
          <div className="catDiv" key={category.id}>
            <a href="/questions/:id"><p>{category.name}</p>
            <img src={category.img} style={{width:"200px", borderRadius:"5px", margin:"5px"}}/></a>
          </div>
        ))}
      </div>
    </Layout>
  );
}
module.exports = Categories;
