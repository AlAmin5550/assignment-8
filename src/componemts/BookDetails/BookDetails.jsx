import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLocalStorageDataOfReadList, getLocalStorageDataOfWishList, saveBooksInReadList, saveBooksInWishList } from "../../Utility/localStorage";



const BookDetails = () => {
    const bookDetails = useLoaderData();
    const paramsObject = useParams();
    const requiredId = paramsObject.bookId;
    const readList = getLocalStorageDataOfReadList();
    const readListId = readList.find(id => id == requiredId);
    const Wishlist = getLocalStorageDataOfWishList();
    const wishListId = Wishlist.find(id=> id == requiredId);
    const handelRead = () => {

        if (requiredId != readListId) {
            saveBooksInReadList(requiredId);
            toast("Added to read List");
        }
        else {
            toast("Book is already in Read List")
        }

    };
    const handleWish = () => {
        if (requiredId != readListId && requiredId != wishListId) {
            saveBooksInWishList(requiredId);
            toast("Added to Wishlist");
        }
        else if (requiredId == readListId) {
            toast("Book is already in Read list");
        }
        else if (requiredId == wishListId) {
            toast('Already added to wishlist');
        }
    }

    const bookRequired = bookDetails.find(id => id.bookId == requiredId);


    const { bookName, author, image, rating, category, review, tags, totalPages, publisher, yearOfPublishing } = bookRequired;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mt-12">
            <figure className="hero min-h-screen bg-base-200">
                <img src={image} className="w-1/2" />
            </figure>
            <div className="space-y-6 ">
                <h1 className="text-4xl font-bold">{bookName}</h1>
                <p>By:{author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p><span className="font-bold">Review:</span>{review}</p>
                <div>
                    <p><span className="font-bold">Tags:</span></p>

                    <div className="flex  gap-7 ">
                        {
                            tags.map((tag, idx) => <button key={idx} className="text-green-500 p-1 bg-gray-100 rounded-3xl ">#{tag}</button>)
                        }
                    </div>
                </div>
                <hr />
                <div className="space-y-3">
                    <p>Number of Pages: <span className="font-bold"> {totalPages}</span></p>
                    <p>Publisher: <span className="font-bold"> {publisher}</span></p>
                    <p>Year of Publishing: <span className="font-bold"> {yearOfPublishing}</span></p>
                    <p>Rating: <span className="font-bold"> {rating}</span></p>

                </div>
                <div className="flex gap-4">
                    <button onClick={handelRead} className="btn border p-5 bg-white">Read</button>
                    <button onClick={handleWish} className="btn border p-4 bg-[#50B1D2] text-white">Wishlist</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;