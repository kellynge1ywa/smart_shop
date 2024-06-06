import { NavLink } from 'react-router-dom';
import './signup.css'

const SignUp=()=>{
    return (
        <div>
            <div className="signup">
                <div className="signup-left">
                    <h2 className='signup-logo' >
                        <NavLink to="/">Smart Shop</NavLink> 
                    </h2>

                </div>
                
                <div className="signup-right">
                    <form>
                        <h2 className='form-title'>Please Sign Up</h2>
                        <div className=''>
                            <label className='form-label'>Fullname</label> <br />
                            <input className='form-input p-2 w-[80%]' type="text" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className='form-label'>Email</label><br />
                            <input  className='form-input p-2 w-[80%]' type="email" placeholder="johndoe@gmail.com" />
                        </div>
                        <div>
                            <label className='form-label'>Password</label><br />
                            <input  className='form-input p-2 w-[80%]' type="password" placeholder="johndoe@2014" />
                        </div>
                        <div>
                            <label className='form-label'>Confirm password</label><br />
                            <input  className='form-input p-2 w-[80%]' type="password" placeholder="johndoe@2014" />
                        </div>
                        <button className='signup-btn'>Sign Up</button>
                        <div>
                            <span className='to-login'>Already have an account? <a><NavLink className="text-red-600" to="/login">Sign in</NavLink></a></span>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}
export default SignUp;