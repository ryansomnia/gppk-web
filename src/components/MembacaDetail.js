import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const MembacaDetail = () => {
  const { id } = useParams();

  // Fetch data menggunakan React Query
  const fetchMembacaData = async () => {
    const response = await axios.post(
      "https://api.gppkcbn.org/cbn/v1/artikel/getDataByKategori",
      { kategori: '3m' },
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

  const { data: membacaData = [], isLoading, error } = useQuery({
    queryKey: ['membacaData'],
    queryFn: fetchMembacaData,
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
  const article = membacaData.find((article) => article.idArtikel === parseInt(id));

  if (!article) {
    return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;
  }
// Ambil sedikit konten (misalnya, 100 karakter pertama)
const shortContent = article.content.replace(/<[^>]+>/g, '').substring(0, 100) + '...';

  // const renderArticle = content => {
  //   return content.split('\n\n').map((paragraph, index) => (
  //     <p key={index}>{paragraph}</p>
  //   ));
  // };
// Buat URL WhatsApp
const shareUrl = `whatsapp://send?text=${encodeURIComponent(
  `${article.title}\n\n${shortContent}\n\n${article.url}\n\n${window.location.href}`
)}`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={article.url}
        alt={article.title}
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{article.date}</p>
      <article>
      <div dangerouslySetInnerHTML={{__html: `${article.content}`}}></div>

  {/* {renderArticle(article.content)} */}
</article>
      {/* <p className="text-gray-700 mb-4"> */}
      <a
          href={shareUrl}
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm no-underline text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600 transition-colors"
        >
          Share ke WhatsApp
        </a>
      <Link
        to="/"
        className="inline-block text-sm no-underline text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        >
        Kembali ke Daftar Artikel
      </Link>
    </div>
  );
};

export default MembacaDetail;
