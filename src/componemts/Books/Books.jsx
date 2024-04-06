import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res=> res.json())
        .then(data=> setBooks(data))
    },[])



    return (
        <div >
            <div className="text-center md: mb-12">
            <h1 className="text-4xl font-bold">Books</h1>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book=> <Book key={book.bookId} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;