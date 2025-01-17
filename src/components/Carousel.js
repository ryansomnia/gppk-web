import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "./Carousel.css";

// Fetch carousel data from API
const fetchCarouselData = async () => {
  const response = await axios.post(
    "http://localhost:3001/cbn/v1/artikel/getDataByKategori",
    { kategori: 'carousel' },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_AUTH_TOKEN", // replace with actual token
      },
    }
  );

  if (response.data.code !== 200) {
    throw new Error('Failed to load carousel data');
  }

  return response.data.data;
};

function BannerInterval() {
  // React Query for data fetching
  const { data: carouselData = [], isLoading, error } = useQuery({
    queryKey: ['carouselData'],
    queryFn: fetchCarouselData,
  });

  // Handle loading state
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="carousel-container">
      <Carousel>
        {carouselData.map((item, index) => (
          <Carousel.Item
            key={item.article_id}
            interval={5000 + index * 500}
            className="carousel-slide"
          >
            <img
              src={item.url}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
            {/* Uncomment to display titles and content */}
            {/* <Carousel.Caption className="carousel-caption">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default BannerInterval;
