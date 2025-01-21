import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchYoutubeData = async () => {
  const response = await axios.get(
    "https://api.gppkcbn.org/cbn/v1/youtube/getAllYoutube",
    // { kategori: 'carousel' },
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
const VideoGrid = () => {
  const { data: youtubeData = [], isLoading, error } = useQuery({
    queryKey: ['youtubeData'],
    queryFn: fetchYoutubeData,
  });
  // Handle loading state
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }
  

  // Membagi video menjadi grup dengan 3 item per slide
  const groupedVideos = [];
  for (let i = 0; i < youtubeData.length; i += 3) {
    groupedVideos.push(youtubeData.slice(i, i + 3));
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Gallery</h2>
        <Carousel interval={null} indicators={true}>
          {groupedVideos.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-around">
                {group.map((video) => (
                  <div
                  key={video.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 mr-3 lg:mr-10"
                  style={{ flexBasis: "40%", maxWidth: "40%" }} // Menampilkan 2,5 konten di handphone
                >
                  <iframe
                    src={`${video.url}?modestbranding=1&showinfo=0`}
                    className="w-full h-32 md:h-48 lg:h-56"
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="p-[5px] md:p-4 text-center">
                    <h3 className="text-[9px] md:text-lg font-bold text-gray-800">{video.title}</h3>
                    <p className="text-[7px] md:text-sm text-gray-600">Speaker: {video.speaker}</p>
                  </div>
                </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default VideoGrid;
