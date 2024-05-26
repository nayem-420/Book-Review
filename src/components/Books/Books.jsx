import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('bookLists.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h1 className="text-center font-bold text-5xl mt-10 mb-10">Books: {books.length}</h1>
            <div className="grid md:grid-cols-3 gap-5 text-center">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;