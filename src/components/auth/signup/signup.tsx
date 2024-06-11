import { NavLink } from 'react-router-dom';
import './signup.css'
import {  useState } from 'react';
import { RegisterUser } from '../../../interfaces/user';
import axios from 'axios';

const SignUp = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [residence, setResidence] = useState("");
    const [dob, setDOB] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullname(event.target.value)
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    const handleResidenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResidence(event.target.value)
    }
    const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setDOB(event.target.value)
    }
    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setPhoneNumber(event.target.value)
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setPassword(event.target.value)
    }

    const registerUser = async () => {
        const newUser: RegisterUser = { fullname: fullname, email: email, residence: residence, dob: dob, password: password, phoneNumber: phoneNumber };
        await axios.post('http://localhost:7282/api/Users/Register',
            newUser
        ).then((response)=>{
            return response.data
            alert("User registered")
        })

    }



    return (
        <div>
            <div className="signup">
                <div className="signup-left">
                    <h2 className='signup-logo' >
                        <NavLink to="/">Smart Shop</NavLink>
                    </h2>

                </div>

                <div className="signup-right">
                    <form onSubmit={registerUser}>
                        <h2 className='form-title'>Please Sign Up</h2>
                        <div className=''>
                            <label className='signup-label my-10'>Fullname</label> <br />
                            <input className='signup-input p-1 w-[80%]' value={fullname}
                                type="text" placeholder="John Doe"
                                onChange={handleNameChange} />
                        </div>
                        <div>
                            <label className='signup-label'>Email</label><br />
                            <input className='signup-input p-1 w-[80%]' type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="johndoe@gmail.com" />
                        </div>
                        <div>
                            <label className='signup-label'>Residence</label><br />
                            <input className='signup-input p-1 w-[80%]' type="text"
                                value={residence}
                                onChange={handleResidenceChange}
                                placeholder="Kitale" />
                        </div>
                        <div>
                            <label className='signup-label'>DOB</label><br />
                            <input className='signup-input p-1 w-[80%]' type="date"
                                value={dob}
                                onChange={handleDobChange}
                                placeholder="27/02/2000" />
                        </div>
                        <div>
                            <label className='signup-label'>Phonenumber</label><br />
                            <input className='signup-input p-1 w-[80%]' type="number"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                placeholder="0707062024" />
                        </div>
                        <div>
                            <label className='signup-label'>Password</label><br />
                            <input className='signup-input p-2 w-[80%]' type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="Johndoe@2014" />
                        </div>

                        <button className='signup-btn'>Sign Up</button>
                        <div>
                            <span className='to-login'>Already have an account? <NavLink className="text-red-600" to="/login">Sign in</NavLink></span>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}
export default SignUp;