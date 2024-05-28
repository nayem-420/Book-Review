import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("bookLists.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-8 mb-14">
        <div className="dropdown dropdown-open">
          <div tabIndex={0} role="button" className="btn btn-success m-1">
            Sort by<RiArrowDropDownLine />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="text-center font-bold text-5xl mt-10 mb-10">
        Books: {books.length}
      </h1>
      <div className="grid md:grid-cols-3 gap-5 text-center">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
