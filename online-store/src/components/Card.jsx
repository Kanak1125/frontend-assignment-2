import './card.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsHeart, BsHeartFill, BsArrowDown, BsCart3} from 'react-icons/bs';

const Card = (props) => {
  const {id, imageUrl, title, price} = props;
  const [toWishList, setToWishList] = useState(false);

  return (
      <div className="col-md-3">
        <div className="product-box rounded "> 
          <div className="product-inner-box position-relative ">
            <div className="icons d-block py-3">
              <div 
                href="#" 
                className= "wish-list text-decoration-none text-dark d-flex align-items-center justify-content-center rounded-circle"
                onClick={() => setToWishList(prevWishList => !prevWishList)}  
              >
                {toWishList ? <BsHeartFill /> : <BsHeart />}
              </div>

            </div>
            <div className="onsale position-absolute top-0 start-0 my-3">
              <span className="badge rounded-0 d-flex "><span className='me-2'>Sale</span> <BsArrowDown /></span>
            </div>
            <Link to={`/product/${id}`} className="product-link" key={id}>
              <img src={imageUrl} alt="" className="img-fluid" />
            </Link>

            <div className="cart-btn">
              <button className="btn btn-white shadow-sm rounded-pill text-white">Add to Cart <BsCart3 /></button>
            </div>
          </div>
          <div className="product-info my-3 py-3">
            <Link to={`/product/${id}`} className="product-link" key={id}>
              <div className="product-name">
                <h3 className='product-title'>{title}</h3>
              </div>
            </Link>
            <div className="product-price fs-5">
              $ <span>{price}</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card