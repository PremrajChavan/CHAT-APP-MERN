import React from 'react'
import GenderCheckbox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import {useState} from "react";
import useSignup from "../../hooks/useSignup";


const SignUp = () => {

        const [inputs, setInputs] = useState({
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            gender: "",
        });

        const { loading, signup } = useSignup();

        const handleCheckboxChange = (gender) => {
            setInputs({ ...inputs, gender });
        };

        const handleSubmit = async (e) => {
            // console.log(inputs);
            e.preventDefault();
            await signup(inputs);
        };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-1g shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 bor'>
                <h1 className='text-3xl font-Helvetica text-center text-[#1C1C1E]'>
                    Sign Up <span className='text-[#075E54]'> Chatify </span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base  text-[#075E54] label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='fullName..' className='w-full input input-bordered h-10' 
                        value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            />
                   </div>
                    <div>
                    <label className='label p-2'>
                            <span className='text-base  text-[#075E54] label-text'>User Name</span>
                        </label>
                        <input type='text' placeholder='username..' className='w-full input input-bordered h-10' 
                        value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
                  
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base  text-[#075E54] label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='password..' className='w-full mt-2 mb-2 input input-bordered h-10'
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                   </div>
                   <div>
						<label className='label'>
							<span className='text-base text-[#075E54] label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input  input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>
<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}  />
                   <Link to={'/login'} className='text-sm text-[#075E54] hover:text-blue-600 mt-3 inline-block' href='#'>
						Already have an account?
					</Link>

                    <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
                    </div>

                </form>
            </div>
        </div>
    )
};
export default SignUp;