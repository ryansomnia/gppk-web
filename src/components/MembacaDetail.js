import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Helmet } from 'react-helmet-async'; // Tambahkan baris ini


const MembacaDetail = () => {
  const { id } = useParams();

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
    return response.data.data;
  };

  const { data: membacaData = [], isLoading, error } = useQuery({
    queryKey: ['membacaData'],
    queryFn: fetchMembacaData,
  });

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  const article = membacaData.find((article) => article.idArtikel === parseInt(id));

  if (!article) {
    return <p className="text-center text-red-500">Artikel tidak ditemukan.</p>;
  }

  // Ambil sedikit konten (misalnya, 100 karakter pertama)
  const shortContent = article.content.replace(/<[^>]+>/g, '').substring(0, 500) + '...';

  // Buat URL WhatsApp
  const shareUrl = `whatsapp://send?text=${encodeURIComponent(
    `${article.title}\n\n${shortContent}\n\n${window.location.href}`
  )}`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Helmet>
        <title>{article.title}</title>
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={shortContent} />
        <meta property="og:image" content={article.url} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
      </Helmet>
      <img
        src={article.url}
        alt={article.title}
        className="w-full h-auto object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{article.date}</p>
      <article>
        <div dangerouslySetInnerHTML={{ __html: `${article.content}` }}></div>
      </article>
      <div className="mt-4 flex justify-between">
        <Link
          to="/"
          className="inline-block text-sm no-underline text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition-colors"
        >
          Kembali ke Daftar Artikel
        </Link>
        <a
          href={`whatsapp://send?text=${encodeURIComponent(
            `${article.title}\n\n${shortContent}\n\n${window.location.href}`
          )}`}
          data-action="share/whatsapp/share"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm no-underline text-white bg-green-500 px-3 py-1 rounded hover:bg-green-600 transition-colors"
        >
          Share ke WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MembacaDetail;