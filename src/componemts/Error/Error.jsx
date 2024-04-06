import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center font-bold text-4xl  ">
            <h1>Opps!</h1>
            <p>You run into an error</p>
            <button className="btn btn-ghost"><Link to='/'>Go back to Home</Link></button>
            
        </div>
    );
};

export default Error;