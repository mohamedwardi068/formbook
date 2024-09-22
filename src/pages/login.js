import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth} from '../context/authContext';


const NewLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();
    const handlelogin = async () => {
        try {
            await login(email, password);
            navigate('/profile');
            console.log("logged sucsefully")
          
        } catch (error) {
            console.error('loginn   Error:', error);
        }
    };


    return (
        <div className="flex h-screen">
            <div
                className="w-1/2 bg-cover bg-center relative"
                style={{
                    backgroundImage: 'url(https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Blog.jpg?resize=740%2C524&ssl=1_)'
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-between text-white p-4">
                    <div className="w-full flex justify-between">
                        <button className="text-2xl flex items-center space-x-2">
                            <FaBars />
                            <span>Menu</span>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-grow">
                        <div className="text-3xl font-bold">Book Shop</div>
                    </div>
                    <div className="flex space-x-4 mt-4 items-center justify-center">
                        <a className="text-2xl"><FaFacebook /></a>
                        <a className="text-2xl"><FaTwitter /></a>
                        <a className="text-2xl"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
                <div className="w-3/4">
                    <h1 className="text-3xl mb-6">Login</h1>
                    <p className="mb-4">Please fill your information below</p>
                    <div className="mb-4 relative">
                        <div className="flex items-center p-4 border rounded relative transition-all duration-300 border-gray-300 focus-within:border-blue-600 focus-within:shadow-outline-blue">
                            <FaUser className="text-gray-500 mr-4" />
                            <input
                                type="text"
                                placeholder=" "
                                className="w-full border-none outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className={`absolute left-10 transform transition-all duration-300 ${email ? '-translate-y-6 text-sm' : 'translate-y-0 text-base text-gray-500'}`}>Username</label>
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <div className="flex items-center p-4 border rounded relative transition-all duration-300 border-gray-300 focus-within:border-blue-600 focus-within:shadow-outline-blue">
                            <FaLock className="text-gray-500 mr-4" />
                            <input
                                type="password"
                                placeholder=" "
                                className="w-full border-none outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className={`absolute left-10 transform transition-all duration-300 ${password ? '-translate-y-6 text-sm' : 'translate-y-0 text-base text-gray-500'}`}>Password</label>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <a className="text-black"></a>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-[125px] h-[50px]" onClick={handlelogin}>Next &gt;</button>
                    </div>
                    <hr className="my-5" />
                    <div className="flex items-center justify-between mb-6">
            <a  className="text-black ">Don’t have an account?</a>
            <button className="text-blue-500 py-2 px-4 rounded font-bold" onClick={()=>{navigate("/signup")}}>Sign up</button>
          </div>
                </div>
            </div>
        </div>
    );
}

export default NewLogin;
