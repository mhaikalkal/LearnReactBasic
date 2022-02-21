import React from "react";
import ReactDOM from "react-dom";

// Nama component harus diawali huruf kapital.
// Stateless functional component, harus nge-return JSX
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// JSX Rules
// cuma bisa return single element 1 yaitu :
// div / section / article or fragment
// pake camelCase untuk html attribute
// className instead of class
// close setiap element.
// formatting

const Person = () => <h3>I'm Haikal</h3>;
const Message = () => {
  return <p> Hello World, hows ur day?</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
