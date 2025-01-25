import React from "react";
import VisiMisi from "../components/VisiMisi";
import StrukturOrganisasi from "../components/StrukturOrganisasi";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchCabangData = async () => {
  const response = await axios.get(
    "https://api.gppkcbn.org/cbn/v1/cabang/getAllData",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.data.code !== 200) {
    throw new Error("Failed to load carousel data");
  }

  return response.data.data;
};
function About() {
  const {
    data: cabangData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabangData"],
    queryFn: fetchCabangData,
  });
   // Handle error state
   if (error) {
    // return <div className="error">Error: {error.message}</div>;
    console.log(`error: ${error.message}`);
    return null; // Don't render anything
  }

  // Handle empty data
  if (cabangData.length === 0) {
    console.log("cabang data is empty");
    return null; // Don't render anything
  }

  return (
    <div className=" text-gray-800 font-sans">


      {/* Hero Section */}
      <section
  className="relative py-36 bg-slate-400 flex items-center justify-center bg-fixed bg-center bg-cover text-white"
  style={{
    backgroundImage: `url('/images/pw.JPG')`,
    transition: 'background-image 1s ease-in-out',
  }}
  id="parallax-section"
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-0 text-center mx-6 md:mx-16 lg:mx-28">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-5 text-white">
      Christ Bless Nation
    </h1>
   
    <p className="text-sm sm:text-base lg:text-xl font-normal leading-relaxed sm:leading-loose ">
    CBN Church adalah gereja sel yang Apostolik yang bergerak dalam pimpinan Roh Kudus untuk membawa jiwa - jiwa kepada pengenalan akan Kristus dan menerapkan gaya hidup seperti Kristus. 
    Dimulai pada tahun 1999 dalam bentuk Persekutuan kecil yang dihadiri 10-12 orang, dengan tuntunan Roh Kudus, CBN Church terus mengerjakan panggilannya bukan hanya di gereja lokal di Cibinong - Bogor tetapi juga membuka cabang gereja lokal di beberapa tempat di Indonesia.      <br />
      </p>
  </div>
</section>

<section className="relative bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Sejarah Singkat CBN Church</h2>
      <p className="text-lg text-gray-600">
        Menelusuri perjalanan iman dari awal mula yang sederhana hingga menjadi gereja yang berdampak bagi banyak jiwa di Indonesia.
      </p>
    </div>

    {/* Content Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left Content */}
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          CBN Church dimulai dari perkumpulan 10 – 12 jemaat pada tahun 1999 yang diajar oleh Ps. Hendrawan. 
          Jemaat ini meminta Ps. Hendrawan mengajar karena mereka rindu mendengar suara Tuhan setelah mendengar 
          kesaksian beliau dalam peristiwa perampokan. Dalam doa, Tuhan menyuruh Ps. Hendrawan datang ke Cibinong.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pada pertemuan pertama, jemaat memulai dengan pujian penyembahan, dan Tuhan melawat mereka. Semua yang hadir 
          mendapatkan karunia Bahasa Roh, termasuk anak kecil berusia 11 tahun. Pada malam itu juga, ada nubuatan bahwa 
          akan ada gereja baru di tempat tersebut.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Seiring berjalannya waktu, tanda-tanda heran seperti mujizat kesembuhan terjadi. Karena pertemuan semakin ramai, 
          lokasi ibadah pun harus dipindahkan ke ruko di Megapolitan, Sukaraja. Tuhan memberikan penglihatan kepada Ps. 
          Hendrawan tentang 5000 jemaat, yang kemudian menjadi visi gereja untuk membawa jiwa kepada Kristus.
        </p>
      </div>

      {/* Right Content - Image */}
      <div className="relative">
        <img
          src="/images/gereja mula.jpg"
          alt="Gereja Awal"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full  bg-opacity-20 rounded-lg"></div>
      </div>
    </div>

    {/* Highlight Section */}
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="relative">
        <img
          src="/images/jemaat.JPG"
          alt="Gereja Masa Kini"
          className="rounded-lg shadow-lg w-full object-cover"
        />
        {/* <div className="absolute bottom-0 left-0 bg-gray-500 bg-opacity-75 p-6 text-white rounded-lg">
          <h3 className="text-xl font-bold">Visi Gereja</h3>
          <p className="mt-2">
            Tuhan memberikan visi kepada Ps. Hendrawan untuk membawa 5000 jiwa kepada Kristus. Visi ini menjadi landasan pelayanan gereja hingga saat ini.
          </p>
        </div> */}
      </div>

      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Hari Minggu, 13 November 1999, menjadi momen penting ketika CBN Church diresmikan sebagai gereja lokal bernama GSJA CWS Cibinong. Pada tahun 2010, gereja memutuskan bergabung dengan sinode GPPK dan menjadi GPPK CBN (Christ Blessed Nation).
        </p>
        <p className="text-gray-700 leading-relaxed">
          Sesuai dengan nama baru ini, pada tahun 2017, pelayanan gereja diperluas ke berbagai daerah di Indonesia, termasuk Sidikalang, Medan, Lampung, Magetan, dan Manado. Setiap cabang gereja menjadi saluran berkat bagi masyarakat setempat.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Hingga saat ini, GPPK CBN tetap melayani dengan visi dan misi yang sama: membawa jiwa kepada pengenalan akan Kristus dan memperluas pelayanan hingga ke seluruh pelosok Indonesia.
        </p>
      </div>
    </div>
  </div>
</section>




      {/* Mission & Vision */}
  <VisiMisi/> 


      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-10">7 Pilar gereja CBN Church</h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
  {[{ 
      title: "1. PROFESSIONAL PASTORAL LEADERSHIP", 
      description: "Memiliki kepemimpinan pastoral yang handal" 
    },
    { 
      title: "2. INSPIRING WORSHIP SERVICE", 
      description: "Ibadah yang mewahyuhkan" 
    },
    { 
      title: "3. EXTENSIVE PRAYER NETWORK", 
      description: "Memiliki jaringan doa yang menyebar luas" 
    },
    { 
      title: "4. TO EQUIPT THE ALL HUMBLE MEMBERS FOR THE SERVICES AN TO BUILT THE BODY OF CHRIST", 
      description: "Memiliki jemaat yang rendah hati dan mau diperlengkapi untuk pekerjaan dan Pembangunan Tubuh Kristus" 
    },
    { 
      title: "5. LIFE CHANGING FOR SMALL GROUP OR FAMILY OF GOD", 
      description: "Memiliki kelompok kecil atau Keluarga Kerajaan Allah (KKA) yang mengubah kehidupan" 
    },
    { 
      title: "6. EFICIENT CONGRATIONAL CARE BEETWEEN MEMBERS TO MEMBERS", 
      description: "Memiliki kepedulian jemaat kepada jemaat yang efisien" 
    },
    { 
      title: "7. ACCOUNTABLE AND HONEST PROFESSIONAL ADMINISTRATION", 
      description: "Memiliki administrasi yang dapat dipertanggungjawabkan yang diolah oleh orang – orang yang bersih dan professional" 
    },
  ].map((item, index, array) => (
    <li
      key={index}
      className={`bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 transition ${
        index === array.length - 1 ? "lg:col-span-3 text-center" : ""
      }`}
    >
    <h3 className="text-xl font-semibold">{item.title}</h3>
    <p className="text-gray-600 mt-2">{item.description}</p>
     
    </li>
  ))}
</ul>

        </div>
      </section>

   
     {/* Branches Section */}
{/* Branches Section */}
{/* Branches Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-5xl md:text-6xl font-bold mb-10">Cabang CBN Church</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {cabangData.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.img}
              alt={item.namaCabang}
              className="h-48 w-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="p-3 md:p-4 text-start">
            <h3 className="text-sm md:text-xl font-semibold text-gray-800">{item.namaCabang}</h3>
            {/* <p className="text-sm text-gray-600 mt-2">
              <strong>Year Established:</strong> {branch.year}
            </p> */}
            <p className="text-sm text-gray-600">
              <strong>Gembala:</strong> {item.pastor}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Alamat:</strong> {item.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<StrukturOrganisasi/>


      {/* Footer */}
  
      <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Lokasi Header */}
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-6">LOKASI GEREJA</h2>

          {/* Google Map Embed */}
          <div className="flex justify-center">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5956.655602009466!2d106.82825609474942!3d-6.526747577776205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x2e69c142e89de6bb%3A0xe730a05cd678e01b!2sGPPK%20Christ%20Blessed%20Nation%2C%20Cimandala%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!3m2!1d-6.5261588999999995!2d106.83132169999999!5e0!3m2!1sid!2sid!4v1736020477965!5m2!1sid!2sid"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126924.55853199846!2d106.68942915961668!3d-6.229728555527164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e14413f2a3%3A0xb799f2a2239ef4ff!2sJakarta!5e0!3m2!1sen!2sid!4v1682364578719!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
    </div>
  );
}

export default About;
