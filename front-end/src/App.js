import './App.css';
import Nav from './components/Nav';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route element={<PrivateComponent/>}> 
      <Route path="/" element={<h1>product</h1>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/update" element={<UpdateProduct/>}/>
      <Route path="/profile" element={<h1>Profile page</h1>}/>
      <Route path="/logout" element={<h1>Log out</h1>}/>
      <Route path="/signin" element={<h1>Sign In</h1>}/>
      </Route>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
    </>
  );
}

export default App;
