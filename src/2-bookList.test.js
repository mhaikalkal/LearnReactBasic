import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// ./ artinya di folder yang sama
// ../ artinya mundur 1 folder

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
      <Stars />
      <Price />
    </article>
  );
};

const Image = () => {
  return <img src="https://akcdn.detik.net.id/visual/2017/03/29/906cf901-ab75-44dd-8acc-c4b3a5e2d743_169.jpg?w=970&q=80" alt="Book Cover" width="200px" />;
};

const Title = () => <h1>Lost Stars</h1>;

// Inline CSS, Harus pake object, caranya ` {} ` = masuk ke javascript, ` {{}} ` = javascript object.
const Author = () => <h5 style={{ color: "salmon", fontSize: "0.75rem", marginBottom: "0.25rem" }}>Miranda Nainggolan</h5>;
const Stars = () => <p>4.6/5</p>;
const Price = () => <p>$12.45</p>;

ReactDOM.render(<BookList />, document.getElementById("root"));
