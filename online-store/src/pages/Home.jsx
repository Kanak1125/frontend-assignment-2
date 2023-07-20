// import MyCarousel from '../components/MyCarousel'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Card from '../components/Card';

const Home = () => {
    const [data, setData] = useState([]);

    const {isLoading, error} = useQuery({
        queryKey: ["products"],
        queryFn: () => {
            fetch(`https://fakestoreapi.com/products/`).then(res => res.json())
            .then(data => {
                setData(data)
            });
            return data;
        }
    })

  return (
    <main>
        {/* <MyCarousel /> */}
        <div className='container my-2 py-5'>
        <div className="row gx-3 gy-5">
                {data.map(cardData => 
                    // <Link to="/productDetails" key={cardData.id}>
                    // <RouterProvider router={router}>
                        <Card 
                            key={cardData.id}
                            id={cardData.id}
                            imageUrl={cardData.image}
                            title={cardData.title}
                            price={cardData.price}
                        />
                    // </RouterProvider>
                    // </Link>
                )}
            </div>
        </div>
    </main>
  )
}

export default Home