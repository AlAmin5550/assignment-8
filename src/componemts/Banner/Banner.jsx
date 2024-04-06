import { Link } from "react-router-dom";
import bannerImg from '../../assets/pngwing 1.png'


const Banner = () => {
    return (
        <div className="hero  bg-base-200 rounded-3xl md:p-14 mt-4 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div  className="space-y-12  mr-12">
                    <h1 className="text-5xl font-bold">Books to freshen <br /> up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-white text-xl"><Link to='/listed'>View List</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;