import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookStorage } from "../Utility/localStorage";
import { RiArrowDropDownLine } from "react-icons/ri";

const ReadPages = () => {
    
    const books = useLoaderData();
    const [booksStored, setBookStored] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
  
    const handleBooksFilter = filter => {
      if(filter === 'All'){
          setDisplayBooks(booksStored);
      }
      else if(filter === 'Fiction'){
          const fictionBooks = booksStored.filter(book => book.category === 'Fiction');
          setDisplayBooks(fictionBooks);
      }
      else if(filter === 'Biography'){
          const biographyBooks = booksStored.filter(book => book.category === 'Biography');
          setDisplayBooks( biographyBooks);
      }
      else if(filter === 'Non-Fiction'){
          const nonFictionBooks = booksStored.filter(book => book.category === 'Non-Fiction');
          setDisplayBooks( nonFictionBooks);
      }
      else{
          setDisplayBooks('Science-Fiction');
      }
    }
  
    useEffect(() => {
      const storedBookIds = getStoredBookStorage();
      if (books.length > 0) {
        // const book = books.filter(book => storedBookIds.includes(book.id));
        // console.log( storedBookIds, books, bookStored);
        for (const id of storedBookIds) {
          const book = books.find((book) => book.id === id);
          if (book) {
            booksStored.push(book);
          }
        }
        setBookStored(booksStored);
        setDisplayBooks(booksStored);
      }
    }, [books]);
  return (
    <div>
      <div className="text-center mt-8 mb-14">
        <div className="dropdown dropdown-open">
          <div tabIndex={0} role="button" className="btn btn-success m-1">
            Sort by
            <RiArrowDropDownLine />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleBooksFilter('All')}>
              <a>All</a>
            </li>
            <li onClick={() => handleBooksFilter('Fiction')}>
              <a>Fiction</a>
            </li>
            <li onClick={() => handleBooksFilter('Science-Fiction')}>
              <a>Science Fiction</a>
            </li>
            <li onClick={() => handleBooksFilter('Biography')}>
                <a>Biography</a>
            </li>
            <li onClick={() => handleBooksFilter('Non-Fiction')}>
                <a>Non-Fiction</a>
            </li>
          </ul>
        </div>
      </div>
      <ul>
        {
            booksStored.map(book => <li key={book.id}>
                <span>{book.bookName} {book.image}: {book.category}</span>
            </li>)
        }
        </ul>
    </div>
  );
};

export default ReadPages;
