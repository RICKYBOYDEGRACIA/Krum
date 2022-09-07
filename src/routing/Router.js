import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import App from "../App";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/Sample" element={<Testimonial/>}></Route>
            </Routes>
        </BrowserRouter>


    )
}
export default Router;
