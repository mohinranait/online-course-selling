import { useState } from 'react';
import ButtonPrimary from '../buttons/ButtonPrimary';
import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { CgSpinnerTwo } from 'react-icons/cg';

const RegisterForm = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const axiosPublic = useAxiosPublic();
    const [formValue, setFormValue] = useState({
        name:'',
        email: '',
        password:'',
        phone:'',
    })



    const handleRegister = async (e) => {
        e.preventDefault();
        const {name, email, password, phone} = formValue;
        if(name.length == 0 || phone?.length == 0 || email.length == 0 || password?.length == 0){
            return setError("Please! Provide all input fildes value")
        }else{
            setError("")
        }
        
        try {
            setLoading(true)
            const res = await axiosPublic.post(`/register`, formValue)
            if(res.data.success){
                navigate('/login')
                setLoading(false)
            }
        } catch (error) {
            setError(error.message)
        }
    }




    return (
        <>
             <form onSubmit={handleRegister}>
                    <h1 className="text-4xl font-bold mb-7 text-gray-600">Register</h1>
                   {
                    error &&  <div className="bg-primary px-3 py-3 rounded mb-5 bg-opacity-10  text-primary font-medium">
                        {error}
                    </div>
                   }
                    <div className="space-y-5">
                        <div>
                            <Input 
                            type={'text'} 
                            placeholder={"Full name"} 
                            value={formValue.name} 
                            onChange={(e) => setFormValue({...formValue, name:e.target.value})} 
                            />
                        </div>
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
                            type={'tel'} 
                            placeholder={"Phone"} 
                            value={formValue.phone} 
                            onChange={(e) => setFormValue({...formValue, phone:e.target.value})} 
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
                           <span className="flex gap-2 items-center justify-center">  {loading ? <CgSpinnerTwo size={23} className="animate-spin" /> : 'Register'}</span>
                        </ButtonPrimary>
                    </div>
                </form>   
        </>
    );
};

export default RegisterForm;