import '../App.css';

import './test.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Navigate,
    useLocation,
    Outlet
} from "react-router-dom";

import header_1 from './../image/header_1.jpg';
import header_2 from './../image/header_2.jpg';
import header_logo from './../image/logo.gif';

import body_1 from './actionAdventure/images/photo_1.jpg';
import body_2 from './actionAdventure/images/photo_2.jpg';
import React from 'react';




const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to="/home" replace state={{ from: location }} />;
    }

    return children;
};

function Login() {
    const { onLogin } = useAuth();
    return (
        <button type="button" onClick={onLogin}>
            Sign In
        </button>
    );
}

function Browse() {
    const { token, onLogout } = useAuth();
    console.log(token);
    console.log("asd");
    return (
        <div className='container'>
            <div class="row">
                <div className='cols-sm'>
                    <Link to="actionAdventure">
                        Action & Adventure
                    </Link>
                </div>
                <div className='cols-sm'>
                    <Link to="anime">
                        Anime & Manga
                    </Link>
                </div>
            </div>
           
        </div>
        
    );
}


function ActionAdventrue() {
    console.log("Action");
    return (
       <div>
           <h3>TEST</h3>
       </div>
    );
}
function ContentAnime() {
    return (

        <div id="body">
            <div className='inner'>
                <Link to="test1">
                    <div class="leftbox">
                        <h3>Start Wars</h3>
                        <img src={body_1} width="93" height="95" alt="photo 1" class="left" />
                        <p><b>Price:</b> <b>10000</b> &amp; eligible for FREE Super Saver Shipping on orders over <b>$195</b>.</p>
                        <p><b>Availability:</b>Yes</p>
                        <p class="readmore"><a href="#">BUY <b>NOW</b></a></p>
                        <div class="clear"></div>
                    </div>
                </Link>
                <Link to="test1">
                    <div class="rightbox">
                        <h3>Harry Potter </h3>
                        <img src={body_2} width="107" height="91" alt="photo 4" class="left" />
                        <p><b>Price:</b> <b>20000</b> &amp; eligible for FREE Super Saver Shipping on orders over <b>$105</b>.</p>
                        <p><b>Availability:</b>Yes</p>
                        <p class="readmore"><a href="#">BUY <b>NOW</b></a></p>
                        <div class="clear"></div>
                    </div>

                </Link>
            </div>
        </div>



    );
}
const AuthContext = React.createContext(null);

const useAuth = () => {
    return React.useContext(AuthContext);
};

const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();


    const [token, setToken] = React.useState(null);

    const handleLogin = async () => {
        const token = await fakeAuth();
        console.log("asd")
        console.log(token);

        setToken(token);
        const origin = location.state?.from?.pathname || '/home';
        navigate(origin);
    };
    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
const Navigation = () => {
    const { token, onLogout } = useAuth();
    console.log(token)
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand">Online Movie Star</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <Link to="home" class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </Link>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

function Home() {
    return (
        <Router>
            <AuthProvider>
                <Navigation />
                <Routes>
                    <Route path='home' element={<Browse />}>
                        <Route path='actionAdventure' element={
                            <ActionAdventrue />} />
                    </Route>
                    <Route path='login' element={<Login />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default Home;