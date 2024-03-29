import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Input from "../Input/Input";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { CgSpinnerTwo } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/user/authSlice";

const LoginForm = () => {
    
    const dispatch = useDispatch();
    const axios = useAxios();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formValue, setFormValue] = useState({
        email: '',
        password:'',
    })

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password} = formValue;
        if( email.length == 0 || password?.length == 0){
            return setError("Please! All inputs filed is required")
        }else{
            setError("")
        }
        
        try {
            setLoading(true)
            const res = await axios.post(`/login`, formValue)
            if(res?.data?.success){
                dispatch( addUser(res?.data?.user) );
                setLoading(false)
                navigate('/user/dashboard')
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <h1 className="text-4xl font-bold mb-7 text-gray-600">Login</h1>
                {
                    error &&  <div className="bg-primary px-3 py-3 rounded mb-5 bg-opacity-10  text-primary font-medium">
                        {error}
                    </div>
                }
                <div className="space-y-5">
                    <div>
                        <Input 
                        type={'email'} 
                        placeholder={"Email"} 
                        value={formValue.email} 
                        onChange={(e) => setFormValue({...formValue, email:e.target.value})} 
                        />
                    </div>
                    <div>
                        <Input 
                        type={'password'} 
                        placeholder={"Password"}
                        value={formValue.password} 
                        onChange={(e) => setFormValue({...formValue, password:e.target.value})} 
                            />
                    </div>
                </div>
                <div className="mt-5">
                    <ButtonPrimary  type={'submit'} options={`w-full `} >
                        <span className="flex gap-2 items-center justify-center">  {loading ? <CgSpinnerTwo size={23} className="animate-spin" /> : 'Login'}</span>
                    </ButtonPrimary>
                </div>
            </form>   
        </>
    );
};

export default LoginForm;