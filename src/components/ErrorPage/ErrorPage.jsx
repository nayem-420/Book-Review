import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <h2 className="text-6xl text-red-700 mb-12 font-extrabold">404 not found</h2>
                <Link to='/'><button className="btn btn-primary">Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;