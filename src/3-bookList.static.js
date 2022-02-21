import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// ./ artinya di folder yang sama
// ../ artinya mundur 1 folder

// Object
const firstBook = {
  title: "Lost Stars",
  image: "https://akcdn.detik.net.id/visual/2017/03/29/906cf901-ab75-44dd-8acc-c4b3a5e2d743_169.jpg?w=970&q=80",
  author: "Miranda Nainggolan",
  stars: "4.5/5",
  price: "$12.45",
};

const secondBook = {
  title: "In Tesla we Love",
  image: "https://api.time.com/wp-content/uploads/2022/01/Tesla-.jpg",
  author: "Shirada Katsumoto",
  stars: "4.1/5",
  price: "$11.00",
};

function BookList() {
  return (
    <section className="booklist">
      <Book title={firstBook.title} image={firstBook.image} author={firstBook.author} stars={firstBook.stars} price={firstBook.price}>
        <p>Hesoyam</p>
      </Book>
      <Book title={secondBook.title} image={secondBook.image} author={secondBook.author} stars={secondBook.stars} price={secondBook.price} />
    </section>
  );
}
// Cara nge akses Hesoyam gimana ?
// Si hesoyam tetep masuk ke- props. masuk ke props.children

// const Book = ({ image, title, author, stars, price }) ini juga bisa, jadi tinggal gausah pake props juga
const Book = (props) => {
  // const { image, title, author, stars, price } = props; jadi nanti ditulis nya gausah props.image tinggal image
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt="Book Cover" width="200px" />
      <h1>{props.title}</h1>
      <h5 style={{ color: "salmon", fontSize: "0.75rem", marginBottom: "0.25rem" }}>{props.author}</h5>
      <p>{props.stars}</p>
      <p>{props.price}</p>
      {/* {props.children} */}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
