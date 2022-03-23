import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  Navigate,
  useNavigate,
  useRouteMatch,
  Outlet
} from "react-router-dom";
import Header from './component/header';

import Footer from './component/footer';

/*
export default function BasicExample(){
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <><hr />
        <Routes>
            <Route exact path='/' element={<Home />}>

            </Route>
            <Route exact path='/about' element={<About />}>

            </Route>
            <Route exact path='/dashboard' element={<Dashboard />}>
         
            </Route>
            
          </Routes></>
      </div>
    </Router>
  );
}
*/

/*
function Child(){
  let {id} = useParams();

  return(
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
export default function App(){
  return (
    <Router>
      <div>
        <h2>Account</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/gmail">Gmail</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/amazon">Amazon</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/:id' element={<Child/>} />
        </Routes>
      </div>
    </Router>
  );
}
*/
/*

function Topic() {
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const topics = [
  {
    name :"Nasi Goreng",
    id: "Makanan",
  },
  {
    name: "Museum",
    id: "WisataAlam",
  },
  {
    name: "Ibis,JWMarriot",
    id: "Hotel",
  },

]
function Topics() {
  return (
    <div>
      <h1>Topics</h1>
   <ul>
      {topics.map(( {name , id}) => (
        <li key={id}>
          <Link to={name}>{id}</Link>
          </li>
      ))}
      </ul>
      <hr/>

      <Outlet/>
      </div>
  );
}
export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <hr />

        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/topics' element={<Topics />}>
              <Route path=':topicId' element={<Topic/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}




*/
/*
const fakeAuth =  {
  isAuthenticated : false,
  authenticate(cb){
    fakeAuth.isAuthenticated = true;
    setTimeout(cb , 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb , 100);
  }
};

function AuthButton(){
  let navigate  = useNavigate();
  console.log("test")
  console.log(fakeAuth.isAuthenticated )
  
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => navigate("/"));
        }}
        >Sign out
          </button>
    </p>
  ) : (
    <p>You are not logged in</p>
  )
  
}

function PrivateRoute() {

  return(
    fakeAuth.isAuthenticated ? <ProtectedPage/> :
    <Navigate to="/login"/>
  );
}

function PublicPage(){
  return <h3>Public</h3>;
}

function ProtectedPage(){
  return <h3>Private</h3>;
}

function LoginPage(){
  let navigate = useNavigate();
  let location = useLocation();

  let {from} = location.state || {from : {pathname : "/"}};
  let login = () =>{
    fakeAuth.authenticate(() => {
      navigate(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname} </p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default function App(){
  return (
    <Router>
      <div>
        <AuthButton/>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
          </ul>

          <Routes>
            <Route path='/public' element={<PublicPage/>}>
            </Route>
            <Route path='/login' element={<LoginPage/>}>
            </Route>
            <Route path='/private' element={<PrivateRoute/>}/>
          </Routes>

        
      </div>
    </Router>
  );
}
*/
function App() {

  
}

export default App;