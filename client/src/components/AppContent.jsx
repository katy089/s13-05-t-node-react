import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { HOME, LOGIN, SIGNUP, REGISTER2 } from '../Router/Paths';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import Register2 from './Register2/Register2';


function AppContent() {
    return (
        <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={SIGNUP} element={<SignUp/>}/>
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER2} element={<Register2/>} />
        </Routes>
    );

}

export default AppContent;