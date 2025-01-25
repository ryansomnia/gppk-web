import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import moment from "moment";
import "moment/locale/id";
const KesaksianDetail = () => {
  const { id } = useParams();

  // Fetch data menggunakan React Query
  const fetchKesaksianData = async () => {
    const response = await axios.get(
      "https://api.gppkcbn.org/cbn/v1/artikel/kesaksian/getAllData",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.code !== 200) {
      throw new Error('Failed to load renungan data');
    }
    console.log('============sss========================');
    console.log(response);
    console.log('====================================');
    return response.data.data;
   
  };

  const {
    data: kesaksianData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["kesaksianData"],
    queryFn: fetchKesaksianData,
  });

  // Handle loading state
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  // Temukan artikel berdasarkan ID
  const kesaksian =  kesaksianData.find((article) => article.id === parseInt(id));

  if (!kesaksian) {
    return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;
  }

  // const renderArticle = content => {
  //   return content.split('\n\n').map((paragraph, index) => (
  //     <p key={index}>{paragraph}</p>
  //   ));
  // };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={kesaksian.url}
        alt={kesaksian.title}
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-6">{kesaksian.highlight}</h1>
      <p className="text-gray-500 text-sm mb-4">{moment(kesaksian.created_at)
              .locale("id")
              .format("dddd, DD MMMM YYYY")} </p>
      <article>
      <div dangerouslySetInnerHTML={{__html: `${kesaksian.isi}`}}></div>

  {/* {renderArticle(article.content)} */}
</article>
      {/* <p className="text-gray-700 mb-4"> */}
      <Link
        to="/"
        className="inline-block text-sm no-underline text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        >
        Kembali ke Daftar Artikel
      </Link>
    </div>
  );
};

export default KesaksianDetail;
