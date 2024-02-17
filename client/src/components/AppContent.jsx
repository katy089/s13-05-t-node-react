import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { HOME, LOGIN, SIGNUP } from '../Router/Paths';
import Login from './Login/Login';
import SignUp from './Login/SignUp';


function AppContent() {
    return (
        <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={SIGNUP} element={<SignUp/>}/>
            <Route path={LOGIN} element={<Login />} />
        </Routes>
    );

}

export default AppContent;