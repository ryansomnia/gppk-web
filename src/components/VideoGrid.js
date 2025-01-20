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
  // const videos = [
  //   {
  //     id: 1,
  //     title: "Ibadah Raya GPPK CBN 5 Januari 2025",
  //     speaker: "Ps. Hendrawan",
  //     url: "https://www.youtube.com/embed/-Lrhogz60Rc",
  //   },
  //   {
  //     id: 2,
  //     title: "Ibadah Raya GPPK CBN 25 Agustus 2024",
  //     speaker: "Ps. Hendrawan",
  //     url: "https://www.youtube.com/embed/jOulsmMg28E",
  //   },
  //   {
  //     id: 3,
  //     title: "Ibadah Raya GPPK CBN 25 Agustus 2024",
  //     speaker: "Ps. Hendrawan",
  //     url: "https://www.youtube.com/embed/jOulsmMg28E",
  //   },
  //   {
  //     id: 4,
  //     title: "Ibadah Raya GPPK CBN 25 Agustus 2024",
  //     speaker: "Ps. Hendrawan",
  //     url: "https://www.youtube.com/embed/jOulsmMg28E",
  //   },
  //   {
  //     id: 5,
  //     title: "Ibadah Raya GPPK CBN 25 Agustus 2024",
  //     speaker: "Ps. Hendrawan",
  //     url: "https://www.youtube.com/embed/jOulsmMg28E",
  //   },
  //   {
  //     id: 6,
  //     title: "Ibadah Raya GPPK CBN 25 Agustus 2024",
  //     speaker: "Ps. Hendrawan",
  //     url: "https://www.youtube.com/embed/jOulsmMg28E",
  //   },
  // ];

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
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    style={{ width: "30%" }}
                  >
                    <iframe
                      src={video.url}
                      className="w-100"
                      title={video.title}
                      style={{ height: "200px" }}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-bold text-gray-800">{video.title}</h3>
                      <p className="text-sm text-gray-600">{video.speaker}</p>
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
