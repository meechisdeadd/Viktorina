const React = require('react');
const Header = require('./Header');

function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />

        <script defer src="/scripts/index.js" />
        <script defer src="/scripts/rega.page.js" />
      </head>
      <Header />
      <body className="body">{children}</body>
    </html>
  );
}

module.exports = Layout;
