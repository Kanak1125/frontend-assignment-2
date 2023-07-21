import './card.css';
// import { useNavigate } from "react-router-dom"
import {BsHeart, BsArrowDown, BsCart3} from 'react-icons/bs';

const Card = (props) => {
  const {imageUrl, title, price} = props;
  // const navigate = useNavigate();

  // function handleCardClick() {
  //   navigate(`/product/${id}`);
  // }

  return (
    // <div className="col-md-2 h-100">
    //     <div className="card mx-auto p-3 overflow-hidden" onClick={handleCardClick}>
    //         <div className="card-container">
    //             <img src={imageUrl} className="card-img" alt=""/>
    //         </div>
    //         <div className="card-body">
    //             <h5 className="card-title text-warning text-nowrap">{title}</h5>
    //             <p className="card-text">${price}</p>
    //             {/* <a href="#" className="btn btn-primary w-100">Add to card btn</a> */}
    //         </div>
    //     </div>
    // </div>
    
      // <div className="row">
        <div className="col-md-3">
          <div className="product-box rounded " style={{}}>

          
          <div className="product-inner-box position-relative ">
            <div className="icons d-block py-3">
              <a href="/" className="text-decoration-none text-dark d-flex align-items-center justify-content-center rounded-circle "><BsHeart /></a>

            </div>
            <div className="onsale position-absolute top-0 start-0 my-3">
              <span className="badge rounded-0 d-flex "><span className='me-2'>Sale</span> <BsArrowDown /></span>
            </div>
            <img src={imageUrl} alt="" className="img-fluid" />

            <div className="cart-btn">
              <button className="btn btn-white shadow-sm rounded-pill text-white">Add to Cart <BsCart3 /></button>
            </div>
          </div>
          <div className="product-info my-3">
            <div className="product-name">
              <h3 className='product-title'>{title}</h3>
            </div>
            <div className="product-price">
              Rs. <span>{price}</span>
            </div>
          </div>
          </div>
        </div>
      // </div>
  )
}

export default Card