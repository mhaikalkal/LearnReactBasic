import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// Data
import { books } from "./Import-Export/books";
// books ini nama variable di books.js

// Component
import Book from "./Import-Export/Book";
// import component Book untuk dipasang di BookList
// nah si Book ini bisa diubah jadi apapun, mau SpecificBook, mau SebuahBuku bisa. Karena default nya Book itu di file sana aja.
// import Specific Book from "./7. Import-Export/Book" ||| dengan catatan di BookList-nya nanti return <SpecificBook /> bukan <Book />

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

// BookList dipasang di browser
ReactDOM.render(<BookList />, document.getElementById("root"));
