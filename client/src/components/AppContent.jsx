import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { HOME, LOGIN } from '../Router/Paths';
import Login from './Login/Login';


function AppContent() {
    return (
        <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
        </Routes>
    );

}

export default AppContent;