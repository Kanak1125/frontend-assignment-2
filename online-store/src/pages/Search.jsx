// import { useEffect, useState } from 'react'
import Card from '../components/Card';

const Search = (props) => {
    const {data, searchTerm} = props;
    // const [searchItemsData, setSearchItemsData] = useState([]);

    // useEffect(() => {
    //     setSearchItemsData(filtered_data);
    // }, [data]);

    // console.log(data, searchTerm)
    const filteredData = data.filter(obj => {
        return Object.values(obj).some(value => 
            typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    console.log(filteredData);

  return (
    <>
        <div className="container my-2 py-5">
            <div className="row">
                <h2>Search Results </h2>
            </div>
            <div className="row gx-3 gy-5">
                    {searchTerm !== '' && filteredData.map(cardData => 
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
    </>
  )
}

export default Search