import React from "react";

const WorshipLayout = () => {
  const worships = [
    {
      id: 1,
      title: "Ibadah Raya Umum",
      description: "Ibadah Umum setiap Minggu, Jam 09:00 WIB",
      image: "/images/bg1.jpg",
    },
    {
      id: 2,
      title: "Ibadah Youth",
      description: "Ibadah Anak Muda setiap Minggu, Jam 16:00 WIB",
      image: "/images/bg2.jpg",
    },
    {
      id: 3,
      title: "Ibadah Sekolah Minggu",
      description: "Ibadah Anak di tiap kelas jam 09:00 WIB",
      image: "/images/sm1.jpg",
    },
    {
      id: 4,
      title: "Ibadah KKA",
      description: "dari Senin sampai Minggu",
      image: null, // Jika tidak ada gambar, gunakan latar belakang warna solid
    },
  ];

  return (
    <div className="flex flex-col md:flex-row my-14">
      {/* Left Block */}
      <div
        className="text-white flex items-center justify-center bg-center h-96 md:h-[70vh] md:w-[60%] shadow-xl"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 251, 255, 0.6), rgba(0, 251, 255, 0.6)), url('/images/usher1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="text-center mt-28 px-6 md:px-12">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Ibadah CBN
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-lg mx-auto">
            Rasakan dan alami kasih Kristus di setiap ibadah
          </p>
        </div>
      </div>

      {/* Right Block */}
      <div className="flex flex-wrap md:w-[40%]">
        {worships.map((worship) => (
          <div
            key={worship.id}
            className={`${
              worship.image ? "flex items-end justify-center" : "flex items-center justify-center bg-gray-900"
            } w-1/2 h-48 md:h-1/2`}
            style={
              worship.image
                ? {
                    backgroundImage: `url('${worship.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 1s ease-in-out",
                  }
                : {}
            }
          >
            <div className="text-center bg-yellow-600 py-1 px-2 m-1 rounded-lg">
              <h3 className="text-[10px] sm:text-xl font-semibold text-white">
                {worship.title}
              </h3>
              <p className="text-[8px] sm:text-xs font-normal text-white leading-tight">
                {worship.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorshipLayout;
