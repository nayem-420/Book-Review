import Header from '../Header/Header';
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto mb-6'>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Root;