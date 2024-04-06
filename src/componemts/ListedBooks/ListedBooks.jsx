import { useLoaderData } from "react-router-dom";
import ReadList from "../ReadList/ReadList";
import { getLocalStorageDataOfReadList, getLocalStorageDataOfWishList } from "../../Utility/localStorage";
import WishList from "../WishList/WishList";


const ListedBooks = () => {
    const books = useLoaderData();
    const stringStoredWishList = getLocalStorageDataOfWishList();
    const stringStoredReadList = getLocalStorageDataOfReadList();

    const storedReadList = stringStoredReadList.map(function(x){
        return parseInt(x,10);
    });
    const storedWishList = stringStoredWishList.map(function(x){
        return parseInt(x,10);
    });
    const readList = [];
    const wishlist = []

    for(const book of books){
        if(storedReadList.includes(book.bookId)){
            readList.push(book);
        }
    }
    for(const book of books){
        if(storedWishList.includes(book.bookId)){
            wishlist.push(book);
        }
    }
    return (
        <div className="mt-9 ">
            <div className="text-center hero bg-base-200 p-5">
                <h1 className="text-5xl font-bold ">Books</h1>
            </div>
            <div className="text-center mt-5">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className="bg-[#23BE0A] text-xl text-white">
                                Sort By
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read List" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        readList.map(book => <ReadList key={book.bookId} book={book}></ReadList>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish List" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                        wishlist.map(book => <WishList key={book.bookId} book={book}></WishList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;