import header_1 from './../image/header_1.jpg';
import header_2 from './../image/header_2.jpg';
import header_logo from './../image/logo.gif';
import '../App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate,
  useLocation
} from "react-router-dom";

function Home() {

  if (fakeAuth.isAuthenticated == false) {
    return (
    <div>
      <h3>Not Log in</h3>
    </div>
    );
    console.log("1");
   
  } else {
    return(
    <div>
      <h3>Login In</h3>
    </div>
    );
    console.log("2");
}
}
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}

function AuthButton() {
  let navigate = useNavigate();


  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => navigate("/"));
        }}
      >
        Signout
      </button>

    </p>
  ) : (
    <div>
      <p>You are not logged in</p>
      <LoginPage />
    </div>

  )
}

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  let login = () => {
    fakeAuth.authenticate(() => {
      navigate(from);
    });
  };

  return (
    <div>
      <p> You must log in to view the page at {from.pathname} </p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function Header() {
  return (
    <Router>
      <AuthButton>
        <div id='header'>
          <h1><img src={header_logo} width="519" height="63" alt="Online Movie Store" /></h1>
          <div id="nav">
            <Link to='/'>
              <a href="#">HOME</a> |
            </Link>
            <Link to='/cart'>
              <a href="#">view cart</a> |
            </Link>
            <Link to='/help'>
              <a href="#">help</a> |
            </Link>
            <Link to='/login'>
              <a>Login</a>
            </Link>
            <Link to="/public">
              <a>Public</a>
            </Link>
            <Link to="/private">
              <a>Private</a>
            </Link>
          </div>
          <a href="#"><img src={header_1} width="744" height="145" alt="Harry Potter cd" /></a>

          <a href="#"><img src={header_2} width="745" height="48" alt="" /></a>
        </div>
      </AuthButton>
      <Routes>
        <Route path='/' element={<Home />} />
       
      </Routes>
    </Router>
  );
}

export default Header;