import React from "react";

const Book = ({ id, image, title, author, stars, price, sinopsis }) => {
  // const { image, title, author, stars, price, sinopsis } = props;

  // attribute, eventHandler
  // onClick, onMouseOver, dll

  const clickHandler = (id) => {
    alert("Hello World! id:" + id);
  };

  const clickSinopsis = (sinopsisDiterima) => {
    console.log(sinopsisDiterima);
  };

  const clickRef = (e) => {
    console.log(e.target);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image} alt="Book Cover" width="200px" />
      <h1>{title}</h1>
      <h5>{author}</h5>
      <p>{stars}</p>
      <p>{price}</p>
      <button type="button" onClick={clickRef}>
        Reference
      </button>
      <button type="button" onClick={() => clickHandler(id)}>
        Alert
      </button>
      <button type="button" onClick={() => clickSinopsis(sinopsis)}>
        Sinopsis
      </button>
    </article>
  );
};

export default Book;
