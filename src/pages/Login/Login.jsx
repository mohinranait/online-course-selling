import { Link } from "react-router-dom";
import LoginForm from "../../components/form/LoginForm";


const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:w-[500px] bg-white rounded-md px-10 py-10">
                <LoginForm />
                <p className="text-center mt-5">Create a new account <Link to={'/register'} className="underline">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;