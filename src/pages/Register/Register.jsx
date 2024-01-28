import { Link } from "react-router-dom";
import RegisterForm from "../../components/form/RegisterForm";


const Register = () => {
   

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:w-[500px] bg-white rounded-md px-10 py-10">
                <RegisterForm />
                <p className="text-center mt-5">Already have an account <Link to={'/login'} className="underline"> Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;