import {useState, useEffect} from "react";
import Book from "./Book.jsx";

export default function List() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetcher() {
                const rawData = await fetch("https://my-json-server.typicode.com/k4teseo/cs392-final/books");
                const {books} = await rawData.json();
                console.log("fetched data", {books});
                setData(books);
        }
        fetcher()
            .then(() => console.log("Yay"))
                .catch(() => console.log("Nay"));
    }, []);

    return (
        <>
            {
                data.map((book) => (
                    <Book
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    cover={book.cover}
                    />
                ))
            }
        </>
    )
}