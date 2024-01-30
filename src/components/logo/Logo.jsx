
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to={'/'}>
            <img src="https://demo-themewinter.com/courselog/wp-content/uploads/2020/02/logo.png" className="w-32" alt="" />
        </Link>
    );
};

export default Logo;