import { useLoaderData, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredBookStorage } from "../Utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const [readBooks, setReadBooks] = useState(getStoredBookStorage('readBooks') || []);
  const [wishlistBooks, setWishlistBooks] = useState(getStoredBookStorage('wishlistBooks') || []);

  useEffect(() => {
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
    localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks));
  }, [readBooks, wishlistBooks]);

  if (!Array.isArray(books)) {
    console.error("Data format error: Expected an array of books", books);
    return <div>Data format error: Expected an array of books</div>;
  }

  const book = books.find((book) => book.bookId === idInt);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleRead = () => {
    if (readBooks.includes(book.bookId)) {
      toast("This book is already in your Read list!");
    } else if (wishlistBooks.includes(book.bookId)) {
      toast.error("This book is already in your Wishlist!");
    } else {
      setReadBooks([...readBooks, book.bookId]);
      toast("Added to Read list successfully 👌");
    }
  };

  const handleWishlist = () => {
    if (wishlistBooks.includes(book.bookId)) {
      toast("This book is already in your Wishlist!");
    } else if (readBooks.includes(book.bookId)) {
      toast("This book is already in your Read list, cannot add to Wishlist!");
    } else {
      setWishlistBooks([...wishlistBooks, book.bookId]);
      toast("Added to Wishlist successfully 😲");
    }
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="w-2/4 p-6 bg-gray-400">
        <img className="w-96" src={book.image} alt={book.bookName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.bookName}</h2>
        <p className="border-b">By: {book.author}</p>
        <p className="border-b">{book.category}</p>
        <p>Rating: {book.rating}</p>
        <p>
          <span className="font-bold">Review:</span>
          {book.review}
        </p>
        <div className="border-b">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-md p-1 m-1 bg-gray-400 text-green-400"
            >
              #{tag}
            </span>
          ))}
        </div>
        <p>
          Number of Pages: <span className="font-bold">{book.totalPages}</span>
        </p>
        <p>
          Publisher: <span className="font-bold">{book.publisher}</span>
        </p>
        <p>
          Year of Publishing:
          <span className="font-bold">{book.yearOfPublishing}</span>
        </p>
        <p>
          Rating: <span className="font-bold">{book.rating}</span>
        </p>
        <div className="card-actions">
          <button
            onClick={handleRead}
            className="btn btn-outline"
            disabled={readBooks.includes(book.bookId)}
          >
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="btn btn-info"
            disabled={readBooks.includes(book.bookId)}
          >
            Wishlist
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;