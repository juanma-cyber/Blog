import React from 'react';
import ArticleContent from './ArticleContent';
import { Helmet } from 'react-helmet';
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{article.title}</title>
        <meta content={article.desc} name="description" />
        <meta content={article.title} property="og:title" />
        <meta content={article.desc} property="og:description" />
        <meta content={article.img} property="og:image" />
        <meta content="https://portfolio-puce-iota-63.vercel.app/" property="og:author" />
        <meta content={article.title} name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/"
          property="facebook:author"
        />
        <meta content={article.img} name="facebook:image" />
        <meta content={article.title} property="og:site_name" />
        <meta content={article.desc} property="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/"
          property="twitter:author"
        />
        <link rel="apple-touch-icon" href={article.img} />

        <link href={article.img} rel="icon" type="image/x-icon" />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta content={article.img} name="twitter:image" />
        <meta content={article.desc} name="twitter:description" />
        <meta content={article.title} name="twitter:title" />
      </Helmet>
      <div className="p-1">
        <div className="card p-1">
          <img
            className="img-fluid card"
            alt="{article.title}"
            src={article.img}
          />
          <main className="card-content p-3 p-md-5">
            <h1>
              <a href="/"> {article.title}</a> <span className="cute">✏️</span>
            </h1>
            <h3>{article.desc}</h3>
            <p className="date">
              <a href={article.authorlink}>{article.author}</a> ⏰{' '}
              {article.date}
            </p>
            <p className="dotted" />
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};
export default SinglePage;