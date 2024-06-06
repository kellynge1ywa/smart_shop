import { NavLink } from "react-router-dom";
import './reset_password.css'

const Reset_password=()=>{
    return (
        <div>
             <div className="reset-password">
                <div className="reset-password-left">
                    <h2 className='reset-password-logo' >
                        <NavLink to="/">Smart Shop</NavLink> 
                    </h2>

                </div>
                
                <div className="reset-password-right">
                    <form>
                        <h2 className='form-title'>Reset Password</h2>
                        
                        <div>
                            <label className='form-label'>Email</label><br />
                            <input  className='form-input p-2 w-[80%]' type="email" placeholder="johndoe@gmail.com" />
                        </div>
                        <button className='reset-password-btn'>Reset Password</button>
                        <div>
                            <span className="to-login">Back to Login? <a><NavLink className="text-red-600" to="/login">Login</NavLink></a></span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reset_password;