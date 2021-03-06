import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
const books = [
  {
    id: 1,
    title: "Lost Stars",
    image: "https://akcdn.detik.net.id/visual/2017/03/29/906cf901-ab75-44dd-8acc-c4b3a5e2d743_169.jpg?w=970&q=80",
    author: "Miranda Nainggolan",
    stars: "4.5/5",
    price: "$12.45",
  },
  {
    id: 2,
    title: "In Tesla we Love",
    image: "https://api.time.com/wp-content/uploads/2022/01/Tesla-.jpg",
    author: "Shirada Katsumoto",
    stars: "4.1/5",
    price: "$11.00",
  },
  {
    id: 3,
    title: "Apocalypse: New Beginning",
    image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/toyota-supra-news2.jpg?itok=qQaoFAbD",
    author: "Marry F. Anne",
    stars: "3.6/5",
    price: "$10.00",
  },
];

// buku ini sebagai property. isinya dari data/json book dari array books
// buku ini akan ditangkap oleh const Book, lokasinya ada di dalam props.
// maka pemanggilannya nanti props.buku -- jika ingin ambil image maka: props.buku.image

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} buku={book} />;
      })}
    </section>
  );
}
// untuk id sebenernya bisa juga kita kirim ke const Book.
// tapi untuk contoh, kita coba buat 2 property di BookListnya.

// oleh karena itu kita define dulu ke props.buku
// biar bisa langsung kita ambil isi props-nya
const Book = (props) => {
  const { image, title, author, stars, price } = props.buku;
  console.log(props);

  return (
    <article className="book">
      <img src={image} alt="Book Cover" width="200px" />
      <h1>{title}</h1>
      <h5>{author}</h5>
      <p>{stars}</p>
      <p>{price}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
