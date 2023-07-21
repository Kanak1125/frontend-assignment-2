// import MyCarousel from '../components/MyCarousel'
// import { useState, createContext, useContext } from 'react';
import Card from '../components/Card';

const Home = (props) => {
    // const DataProvider = createContext();
    const {data, isLoading, error} = props;
    
    if (isLoading) return (
        <div className="d-flex align-items-center mx-auto my-5 container">
            <h2>Loading...</h2>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )

    if (error) return <h2>An error has occurred: {error.message}</h2>

  return (
    <>
        {/* <MyCarousel /> */}
        <div className="container my-2 py-5">
            <div className="row featured-products">
                <h2>Featured Products</h2>
            </div>
            <div className="row my-4 gx-3 gy-5">
                    {data.map(cardData => 
                        /* // <RouterProvider router={router}> */
                            <Card 
                                key={cardData.id}
                                id={cardData.id}
                                imageUrl={cardData.image}
                                title={cardData.title}
                                price={cardData.price}
                            />
                        /* // </RouterProvider> */
                    )}
            </div>
        </div>
    </>
  )
}

export default Home