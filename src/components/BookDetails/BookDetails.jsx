import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  console.log("Books data:", books);

  const { id } = useParams();
  const idInt = parseInt(id);
  console.log("Parsed book ID:", idInt);

  const book = books.find((book) => book.bookId === idInt);
  console.log("Found book:", book);

  if (!book) {
    return <div>Book not found</div>;
  }

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
          Year of Publishing:{" "}
          <span className="font-bold">{book.yearOfPublishing}</span>
        </p>
        <p>
          Rating: <span className="font-bold">{book.rating}</span>
        </p>
        <div className="card-actions">
          <button className="btn btn-outline">Read</button>
          <button className="btn btn-info">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
