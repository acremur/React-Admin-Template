import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar"
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import UserList from './pages/userList/UserList'
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

import './app.css'


const App = () => {
  
  const user = true
  // const user = JSON.parse(JSON.parse(localStorage.getItem('persist:root'))?.user).currentUser
  // const admin = user?.isAdmin
  
  return (
    <Router>
     {user && <Topbar />}
      <div className="container">
        {user ? (
          <>
            <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<UserList />} />
              <Route path='/user/:userId' element={<User />} />
              <Route path='/newUser' element={<NewUser />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/newProduct' element={<NewProduct />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        )}
      </div>
    </Router>
  )
}

export default App