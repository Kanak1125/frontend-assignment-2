// import { Carousel } from "bootstrap";
// import { CarouselItem } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const StoreCarousel = () => {
    const imgArr = [
        "https://images.unsplash.com/photo-1585155770447-2f66e2a397b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
        "https://images.unsplash.com/photo-1619708662321-71b89443c3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ];

    const carouselImgElement = imgArr.map((image, index) => {
        return (
            <Carousel.Item interval={2500} key={index}>
                {/* <ExampleCarouselImage text="First slide" /> */}
                <img src={image} alt="" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>Have a great shopping experience!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, delectus quas?</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    // return (
    //   <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    //       {carouselImgElement}
    //       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    //           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //           <span className="visually-hidden">Previous</span>
    //       </button>
    //       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    //           <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //           <span className="visually-hidden">Next</span>
    //       </button>
    //   </div>
    // )
    return (
        <Carousel>
            {carouselImgElement}
        </Carousel>
    )
  }
  
  export default StoreCarousel