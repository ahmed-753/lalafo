
import './style/style.scss'
import {Route, Routes} from "react-router-dom"
import Register from "./pages/Register/register";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/Home/Home"
import Layout from "./component/Layout/Layout"


function App() {
    return (
        <>
            <Routes>

                <Route path='' element={<Home/>}/>
                <Route path='/' element={<Layout/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
        </>


    );
}

export default App;