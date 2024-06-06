import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import './footer.css'

export const Footer = () => {
    return (
        <div>
            <div>
                <div>

                    <div className='newsletter'>
                        <span className='newsletter-title'>Subscribe to our newsletter to get updates on our latest offers!</span>
                        <div className='input-card'>
                            <input className='input' type="text" placeholder='Enter your email...' />
                            <button className='sub-btn'>Subscribe</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='footer-links p-5'>
                <div className='flex flex-col justify-center items-center gap-[1.2rem]'>
                    <h2 className='font-bold'>Smart shop</h2>
                    <div>
                        <h2>Follow us on</h2>
                        <div className='flex gap-[1.2rem]'>
                            <FaTwitter/>
                            <FaYoutube/>
                            <FaFacebook/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold'>Useful links</h2>
                    <ul>
                        <li>Help centre</li>
                        <li>Contact us</li>
                        <li>About us</li>
                        <li>Privacy policy</li>
                        <li>Terms and conditions</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Products</h2>
                    <ul>
                        <li>Computer accesories</li>
                        <li>Mobile devices</li>

                        <li>Home appliances</li>
                        <li>Clothes</li>
                    </ul>
                </div>

                <div>
                    <h2 className='font-bold'>Need help?</h2>
                    <ul className=''>
                        <li>Track your order</li>
                        <li>Return policy</li>
                        <li>Shipping & delivery</li>
                        <li>Payment guidelines</li>
                        <li>Bulk purchase</li>
                    </ul>


                </div>
            </div>
            <div className='copyright-card'>
                <span className='copyright'>
                    Smart shop &copy; 2024, All rights reserved
                </span>
            </div>
        </div>

    );
}