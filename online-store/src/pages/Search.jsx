// import { useEffect, useState } from 'react'
import Card from '../components/Card';

const Search = (props) => {
    const {data, searchTerm} = props;
    
    // filtering out the data whose any of the value in the object props have the typed strings...
    const filteredData = data.filter(obj => {
        return Object.values(obj).some(value => 
            typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    console.log(filteredData);

  return (
    <main className="container my-2 py-5">
        <div className="row">
            <h2>Search Results </h2>
        </div>
        {filteredData.length === 0 ?
            <h4 className='my-4'>No such products...</h4> :
            <div className="row my-4 gx-3 gy-5">
                {searchTerm !== '' && filteredData.map(cardData => 
                        <Card 
                            key={cardData.id}
                            id={cardData.id}
                            imageUrl={cardData.image}
                            title={cardData.title}
                            price={cardData.price}
                        />
                )}
            </div>
        }
    </main>
  )
}

export default Search