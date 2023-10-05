import React from 'react';
import { Link } from 'react-router-dom';
import { newsLetter as letter } from './newsLetter';
import { BsArrowRightCircle } from 'react-icons/bs';

export const News = () => {
  const renderedNews = letter.map((news, index) => {
    return (
      <article key={index}>
        <div className="img">
          <img src={news.image} alt={news.title} />
        </div>
        <div className="articleContent">
          <p className="title">{news.title}</p>
          <p className="desc">{news.desc}</p>
          <div className="jumpTo">
            <Link to="/article">
              Read More <BsArrowRightCircle />
            </Link>
          </div>
        </div>
      </article>
    );
  });

  return (
    <div className="news">
      <h1>Latest Update</h1>
      <div className="newsContent">{renderedNews}</div>
    </div>
  );
};
