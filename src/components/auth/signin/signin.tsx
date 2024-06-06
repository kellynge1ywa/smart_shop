import { NavLink } from "react-router-dom";
import './signin.css'

const SignIn = () => {
    return (
        <div>
            <div className="signin">
                <div className="signin-left">
                    <h2 className='signin-logo' >
                        <NavLink to="/">Smart Shop</NavLink>
                    </h2>

                </div>

                <div className="signin-right">
                    <form>
                        <h2 className='form-title'>Please Login</h2>

                        <div>
                            <label className='form-label'>Email</label><br />
                            <input className='form-input p-2 w-[80%]' type="email" placeholder="johndoe@gmail.com" />
                        </div>
                        <div>
                            <label className='form-label'>Password</label><br />
                            <input className='form-input p-2 w-[80%]' type="password" placeholder="johndoe@2014" />
                        </div>
                        <span className="forgot-password" >
                            <NavLink to="/reset_password">

                                Forgot password?
                            </NavLink>
                        </span>

                        <button className='signin-btn'>Login</button>
                        <div>
                            <span className="to-register">Don't have an account? <a><NavLink className="text-red-600" to="/register">Register</NavLink></a></span>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
}
export default SignIn;