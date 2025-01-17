import React from "react";
import VisiMisi from "../components/VisiMisi";

function About() {
  return (
    <div className=" text-gray-800 font-sans">


      {/* Hero Section */}
      <section
  className="relative py-10 bg-slate-400 flex items-center justify-center bg-fixed bg-center bg-cover text-white"
  style={{
    backgroundImage: `url('/images/pw.jpg')`,
    transition: 'background-image 1s ease-in-out',
  }}
  id="parallax-section"
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-0 text-center mx-6 md:mx-16 lg:mx-28">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-10 text-white">
      Christ Bless Nations
    </h1>
    <p className="text-sm sm:text-base lg:text-xl mb-6 font-normal leading-relaxed sm:leading-loose">
      CBN adalah gereja beraliran Kharismatik yang berakar kuat pada kegerakan Karunia Roh Kudus dan Pujian Penyembahan yang mewahyukan hadirat Tuhan. <br/>Berdiri pada tahun 1999, GPPK dimulai dari sebuah persekutuan kecil yang beranggotakan hanya 10-12 jemaat.
      <br />
      <br />
      Hingga hari ini, GPPK CBN tetap teguh pada visi dan misinya: membawa setiap jiwa kepada pengenalan yang mendalam akan Kristus dan memperluas pelayanan hingga ke seluruh pelosok Indonesia. Dengan semangat yang tak pernah padam, GPPK terus menjadi saluran kasih dan kuasa Tuhan, menjangkau mereka yang haus akan kebenaran, dan membangun generasi yang hidup dalam penyembahan sejati dan ketaatan penuh kepada Tuhan.
    </p>
  </div>
</section>

<section className="relative bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Sejarah Singkat GPPK CBN</h2>
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
        <div className="absolute bottom-0 left-0 bg-gray-500 bg-opacity-75 p-6 text-white rounded-lg">
          <h3 className="text-xl font-bold">Visi Gereja</h3>
          <p className="mt-2">
            Tuhan memberikan visi kepada Ps. Hendrawan untuk membawa 5000 jiwa kepada Kristus. Visi ini menjadi landasan pelayanan gereja hingga saat ini.
          </p>
        </div>
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
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Faith", "Love", "Community", "Service", "Integrity", "Growth"].map((value, index) => (
              <li
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-md hover:bg-blue-100 transition"
              >
                <h3 className="text-xl font-semibold">{value}</h3>
                <p className="text-gray-600 mt-2">
                  We believe in {value.toLowerCase()} as a cornerstone of our mission.
                </p>
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
    <h2 className="text-5xl md:text-6xl font-bold mb-10">Cabang CBN</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: "CBN Anugerah Sidikalang",
          img: "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "1995",
          pastor: "Ps. Karman Situmorang",
          address: "Kec. Sidikalang, Kabupaten Dairi, Sumatera Utara",
        },
        {
          name: "CBN Tambah Agung Lampung Timur",
          img: "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "2000",
          pastor: "Ps. Harol W Thamiend",
          address: "RT 21 Dusun VI Tambah Agung Desa negeri Agung. Kec Gunung Pelindung Kab. Lampung Timur",
        },
        {
          name: "CBN Mandalasari Lampung",
          img: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "2010",
          pastor: "Ps. Barnabas Bahari",
          address: "Dusun 06 Sendang Rejo, Mandalasari, Kec Mataram Baru, Kab. Lampung Timur",
        },
        {
          name: "CBN Imanuel Tigalingga",
          img: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "2005",
          pastor: "Ps. Ramses Silaban",
          address: "Desa Tigalingga, Kab. Dairi Sumatera Utara",
        },
        {
          name: "CBN Kasih Karunia Silamboyah",
          img: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "1998",
          pastor: "Ps. Alboin Munthe",
          address: "Desa. Silumboyah, Kec. Sidikalang, Sumatera Utara",
        },
        {
          name: "CBN Agape Magetan",
          img: "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "2015",
          pastor: "Ps. Elisabeth",
          address: " Jl. Raya Sarangan No.73 Plaosan RT.02/ RW 01. Magetan Jawa Timur",
        },
        {
          name: "CBN Gosyen Manado ",
          img: "https://images.pexels.com/photos/356016/pexels-photo-356016.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "2003",
          pastor: "Ps. Lexi Adilang",
          address: "RW.Lingk. 5, Karombasan Utara, Kec. Wanea, Kota Manado, Sulawesi Utara",
        },
        {
          name: "CBN Sinehu",
          img: "https://images.pexels.com/photos/208817/pexels-photo-208817.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          // year: "2007",
          pastor: "Ps. Ramses Silaban",
          address: "Desa Sinehu, Tigalingga, Kab. Dairi, Sumatera Utara",
        }
      ].map((branch, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <div className="relative overflow-hidden">
            <img
              src={branch.img}
              alt={branch.name}
              className="h-48 w-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
          </div>
          <div className="p-3 md:p-4 text-start">
            <h3 className="text-sm md:text-xl font-semibold text-gray-800">{branch.name}</h3>
            {/* <p className="text-sm text-gray-600 mt-2">
              <strong>Year Established:</strong> {branch.year}
            </p> */}
            <p className="text-sm text-gray-600">
              <strong>Gembala:</strong> {branch.pastor}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Alamat:</strong> {branch.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Footer */}
  
      <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Lokasi Header */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">LOKASI GEREJA</h2>

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
