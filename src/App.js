import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import FoodDatails from './components/FoodDatails/FoodDatails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { createContext, useState } from 'react';
import Cart from './components/Cart/Cart';
import Shipment from './components/Shipment/Shipment';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
export const LoginContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[cart, setCart]}>
      <LoginContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BrowserRouter>
        <Header ></Header>
              <Routes>
                  <Route path='/' element={<Home />} ></Route>
                  <Route path='/login' element={<Login />} ></Route>
                  <Route path='/cart' element={<PrivateRoute>
                                                <Cart/>
                                              </PrivateRoute>} ></Route>
                  <Route path='/shipment' element={<PrivateRoute>
                                                    <Shipment/>
                                                  </PrivateRoute>} ></Route>
                  <Route path='/about' element={<About/>} ></Route>
                  <Route path='/fooddatails/:singleFood' element={<FoodDatails/>} ></Route>
                  <Route path='*' element={<Home/>} ></Route>
              </Routes>
          <Footer></Footer>
          </BrowserRouter>
        </LoginContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
