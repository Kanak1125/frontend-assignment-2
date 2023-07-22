import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';
import {BsSearch, BsCart3, BsHouse, BsGrid1X2Fill} from 'react-icons/bs';
import Cart from './pages/Cart';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Categories from './pages/Categories';

export const CartContext = createContext();

function App() {
  // console.log(data);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartList, setCartList] = useState(true);

    const {isLoading, error} = useQuery({
        queryKey: ["products"],
        queryFn: () => {
            axios.get(`https://fakestoreapi.com/products/`).then(res => setData(res.data));
            return data;
        },
        // staleTime: 1000 * 60 * 5    // the data will refetch only after 5 mins even if the page changes...
    })

  // console.log(data);
  
  // const debounce = (func, delay) => {
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => func(...args), delay);
  //   };
  // };

  // const debouncedHandleSearch = useCallback(debounce(value => setSearchTerm(value), 500), []);

  // function handleSearch(e) {
  //   const value = e.target.value;
  //   debouncedHandleSearch(value);
  // }

  function handleSearch(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  return (
    <CartContext.Provider value={{cartList, setCartList}}>
      <BrowserRouter>
      <nav className="nav w-100">
        <div className="container mx-auto d-flex align-items-center justify-content-between py-3 gap-3">
            <Link to={'/'} className="navbar-brand text-white fs-3 fw-semibold">
            Online <span className='logo-text-store'>Store</span>
            </Link>
            <form className="d-flex align-items-center search-form" role="search" onSubmit={(event) => event.preventDefault()}>
                <input
                 className="form-control search-input"
                 type="search" 
                 value={searchTerm}
                 placeholder="Search here..." 
                 aria-label="Search" 
                 onChange={(e) => handleSearch(e)}
                />
                <Link to={'/search'} className="btn search-btn d-flex align-items-center justify-content-center position-absolute">
                  <BsSearch/>
                </Link>
            </form>
            <Link to={'/cart'} className='fs-2 cart-link '><BsCart3 /></Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home
          data={data}
          isLoading={isLoading}
          error={error}
          setData={setData}
        />} />
        <Route path="/search" element={<Search 
          data={data}
          searchTerm={searchTerm}
        />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <footer className='w-100 justify-content-center align-items-center footer position-fixed px-3'>
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
    </CartContext.Provider>
  );
}

export default App;