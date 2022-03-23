import React from 'react';
import {
    Routes,
    Route,
    Link,
    BrowserRouter as Router,
    useNavigate,
    Navigate,
    useLocation
} from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to="/home" replace state={{ from: location }} />;
    }

    return children;
};
const Home = () => {
    const { onLogin } = useAuth();
    return (
        <>
            <h2>Home (Public)</h2>

            <button type="button" onClick={onLogin}>
                Sign In
            </button>
        </>
    );
};

const useAuth = () => {
    return React.useContext(AuthContext);
};


const Dashboard = () => {
    const { token } = useAuth();



    return (
        <>
            <h2>Dashboard (Protected)</h2>

            <div>Authenticated as {token}</div>


        </>
    );
};
const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();


    const [token, setToken] = React.useState(null);

    const handleLogin = async () => {
        const token = await fakeAuth();

        setToken(token);
        const origin = location.state?.from?.pathname || '/dashboard';
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


const AppLogin = () => {
    return (
        <>
            <Router>
                <AuthProvider>
                    <h1>React Router</h1>
                    <Navigation />
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home/>} />
                        <Route
                            path="dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="admin"
                            element={
                                <ProtectedRoute>
                                    <Admin />
                                </ProtectedRoute>
                            }
                        />

                    </Routes>
                </AuthProvider>
            </Router>
        </>
    );
};
const Admin = () => {
    return (
      <>
        <h2>Admin (Protected)</h2>
      </>
    );
  };
const Navigation = () => {
    const { token ,onLogout } = useAuth();
    console.log(token)
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/dashboard">Dashboard</Link>

            {token && (
                <button type="button" onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </nav>
    );
};
export default AppLogin;