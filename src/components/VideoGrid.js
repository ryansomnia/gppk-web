import React from "react";

const VideoGrid = () => {
  const videos = [
    {
      id: 1,
      title: "Ibadah Raya GPPK CBN 5 Januari 2025",
      speaker: "Ps. Hendrawan",
      url: "https://www.youtube.com/embed/-Lrhogz60Rc", //get ID
    },
    {
      id: 2,
      title: "Ibadah Raya GPPK CBN 25 Agustus 2024",
      speaker: "Ps. Hendrawan",
      url: "https://www.youtube.com/embed/jOulsmMg28E", //get ID
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Video Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <iframe
                src={video.url}
                className="w-full h-48"
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.speaker}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
