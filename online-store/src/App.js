import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';
import {BsSearch, BsCart3, BsHouse, BsGrid1X2Fill} from 'react-icons/bs';
import Cart from './pages/Cart';
// import 'jquery';
// import 'popper.js';

function App() {
  
  return (
    <BrowserRouter>
      <nav className="nav w-100">
        <div className="container mx-auto d-flex align-items-center justify-content-between py-3 gap-3">
            <Link to={'/'} className="navbar-brand text-white fs-3 fw-semibold">
            Online <span className='logo-text-store'>Store</span>
            </Link>
            <form className="d-flex align-items-center search-form" role="search">
                <input
                 className="form-control search-input"
                 type="search" 
                //  value={searchItem}
                 placeholder="Search here..." 
                 aria-label="Search" 
                //  onChange={(e) => handleSearch(e)}
                />
                <button className="btn search-btn d-flex align-items-center justify-content-center position-absolute" type="submit"><BsSearch/></button>
            </form>
            <Link to={'/cart'} className='fs-2 cart-link '><BsCart3 /></Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <footer className='w-100 justify-content-center align-items-center footer position-fixed'>
        <Link to={'/'} className='my-4 mx-5 fs-4 text-white footer-links'>
          <BsHouse />
        </Link>
        <Link to={'/categories'} className='my-4 mx-5 fs-4 text-white footer-links'>
          <BsGrid1X2Fill />
        </Link>
        <Link to={'/cart'} className='my-4 mx-5 fs-4 text-white footer-links'>
          <BsCart3 />
        </Link>
      </footer>
    </BrowserRouter>
  );
}

export default App;