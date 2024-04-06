import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineRestorePage } from "react-icons/md";
import { Link } from 'react-router-dom';

const ReadList = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags, totalPages, publisher, yearOfPublishing } = book;



    return (
        <div className="mt-4">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-[230px] h-[228px]"><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By:{author}</p>
                    <div>
                        <p><span className="font-bold">Tags:</span></p>

                        <div className="flex  gap-7 ">
                            {
                                tags.map((tag, idx) => <button key={idx} className="text-green-500 p-1 bg-gray-100 rounded-3xl ">#{tag}</button>)
                            }
                            <div className='flex'>
                            <CiLocationOn></CiLocationOn> <p> Year of Publishing:{yearOfPublishing}</p>
                            </div>
                           
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <span className='flex'><IoIosPerson></IoIosPerson><p>Publisher:{publisher}</p></span>
                        <span className='flex'><MdOutlineRestorePage></MdOutlineRestorePage>Page {totalPages}</span>
                    </div>
                    <hr />
                    <div className='flex gap-3'>
                        <span className='btn bg-blue-100 border-blue-100 p-2 text-blue-800 rounded-3xl'>Category:{category}</span>
                        <span className='btn bg-yellow-100 border-yellow-100 p-2 text-yellow-600 rounded-3xl'>Rating:{rating}</span>
                        <button className='btn bg-[#23BE0A] text-white rounded-3xl'><Link to={`/book/${bookId}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadList.propTypes = {
    book: PropTypes.object.isRequired
}

export default ReadList;