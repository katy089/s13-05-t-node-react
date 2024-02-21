import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { HOME, LOGIN, MATCHSECTION, SIGNUP } from '../Router/Paths';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import MatchSection from '../pages/MatchSection';
import ScrollToTop from './other-components/ScrollToTop';
import NavBar from './NavBar/NavBar';


function AppContent() {
    return (
            <ScrollToTop>
                <NavBar/>
                <Routes>
                    <Route path={HOME} element={<Home />} />
                    <Route path={SIGNUP} element={<SignUp />} />
                    <Route path={LOGIN} element={<Login />} />
                    <Route path={MATCHSECTION} element={<MatchSection />} />

                </Routes>
            </ScrollToTop>
    );

}

export default AppContent;