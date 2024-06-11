import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./home/home";
// import { Clothing } from "./clothing/clothing";
// import { Electronics } from "./electronics/electronics";
// import { Furnitures } from "./furniture/furniture";

import SignUp from "./auth/signup/signup";
import SignIn from "./auth/signin/signin";
import Reset_password from "./auth/reset_password/reset_password";
import Category from "./category/category";

const Index=()=>{
    return (
        <Router>
           
            
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/clothing" element={<Clothing/>}/>
                <Route path="/electronics" element={<Electronics/>}/>
                <Route path="/furniture" element={<Furnitures/>}/> */}
                <Route path="/register" element={<SignUp/>}/>
                <Route path="/login" element={<SignIn/>}/>
                <Route path="/reset_password" element={<Reset_password/>}/>
                <Route path="/:id" element={<Category/>}/>
            </Routes>
           
        </Router>
    );
}

export default Index;