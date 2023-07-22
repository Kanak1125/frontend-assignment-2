import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {BsStarFill, BsStarHalf} from 'react-icons/bs';

const Product = () => {
    const { productID } = useParams();
    console.log(productID);

    const {isLoading, error, data} = useQuery({
        queryKey: ["products"],
        queryFn: () => 
            axios.get(`https://fakestoreapi.com/products/${productID}`)
            .then(res => res.data)
    })

    const [quantity, setQuantity] = useState(1);

    function incrementQuantity() {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    function decrementQuantity() {
        if (quantity === 1) return; 
        setQuantity(prevQuantity => prevQuantity - 1);
    }

    function handleQuantity(e) {
        const value = e.target.value;
        const parsedValue = parseInt(value); // the value we get from the input field is string so parsing to INTEGER type...

        setQuantity(!isNaN(parsedValue) ? parsedValue : value);
    }

    if (isLoading) return (
        <div className="d-flex align-items-center mx-auto my-5 container">
            <h2>Loading...</h2>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )

    if (error) return <h2>An error has occurred: {error.message}</h2>

    return (
    <main className="container my-2 py-5">
        <div className="row">
            <h2>Product Detail </h2>
        </div>
        <div className="container my-5">
            <div className="row">
                <div className="img-container col-md-5 ">
                    <img src={data.image} alt="" className="img-fluid" />
                </div>
                <div className="col-md-7 px-5 price-info-container">
                    <h2 className='product-title fw-bold'>{data.title}</h2>
                    <p className='product-price fs-5'>{`$ ${data.price}`}</p>
                    <div className="ratings">
                        <BsStarFill className='star-icon'/>
                        <BsStarFill className='star-icon'/>
                        <BsStarFill className='star-icon'/>
                        <BsStarFill className='star-icon'/>
                        <BsStarHalf className='star-icon'/>
                    </div>
                    <p className='my-3'>Availability: In stock</p>
                    <p className="description my-4">{data.description}</p>
                    <div className="quantity-and-add-to-cart-container mt-4">
                        <label htmlFor="quantity" title='Quantity'>Qty:</label>
                        <button className="btn btn-outline-dark mx-2 qty-btn" onClick={decrementQuantity}>-</button>
                        <input 
                            type="number" 
                            name="" 
                            id="quantity" 
                            className='qty-input rounded'
                            value={quantity} 
                            min={1} 
                            max={5}
                            onChange={(e) => handleQuantity(e)}
                        />
                        <button className="btn btn-outline-dark mx-2 qty-btn" onClick={incrementQuantity}>+</button>
                        <button className="btn add-to-cart-btn mx-4 rounded">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Product