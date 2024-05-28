import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookStorage } from "../Utility/localStorage";

const ReadPages = () => {

    const books = useLoaderData();
    const [booksStored, setBookStored] = useState([]);

    useEffect( () =>{
        const storedBookIds = getStoredBookStorage();
        if(books.length > 0){
            // const book = books.filter(book => storedBookIds.includes(book.id));
            // console.log( storedBookIds, books, bookStored);
            for(const id of storedBookIds){
                const book = books.find(book => book.id === id);
                if(book){
                    booksStored.push(book);
                }
            }
            setBookStored(booksStored);
        }
    }, []);

    return (
        <div>
            <h3>Pages of read{booksStored.length}</h3>
        </div>
    );
};

export default ReadPages;