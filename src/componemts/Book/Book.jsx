import { IoIosStarOutline } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, bookName, author, image, rating, category, tags } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card w-96 bg-base-100 shadow-xl playfair-display">
                    <figure className="px-10 pt-20 w-[336px] h-[230px] flex items-center bg-base-100">
                        <img src={image} className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <div className="felx gap-7 ">
                            {
                                tags.map((tag, idx) => <button key={idx} className="text-green-500 p-1 bg-gray-100 rounded-3xl ">{tag}</button>)
                            }
                        </div>
                        <h2 className="card-title">{bookName}</h2>
                        <p>By: {author}</p>
                        <hr className="border border-dashed" />
                        <div className="flex gap-2 justify-between">
                            <p>{category}</p>
                            <div className="flex gap-2"><p>{rating}</p>
                                <IoIosStarOutline />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object.isRequired
}

export default Book;