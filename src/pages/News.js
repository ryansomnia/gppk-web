import React from 'react';
import './News.css';

function News() {
  const newsItems = [
    { id: 1, title: 'Church Gathering', date: 'September 15, 2024', summary: 'Join us for our upcoming church gathering on Sunday at 10:00 AM.', img: 'https://picsum.photos/id/1/300/200' },
    { id: 2, title: 'Community Outreach', date: 'October 1, 2024', summary: 'We are organizing a community outreach program. Volunteers are welcome!', img: 'https://picsum.photos/id/2/300/200' },
    { id: 3, title: 'Youth Fellowship', date: 'October 10, 2024', summary: 'Youth gathering this Friday at 7:00 PM.', img: 'https://picsum.photos/id/3/300/200' },
    { id: 4, title: 'Prayer Meeting', date: 'October 20, 2024', summary: 'Weekly prayer meeting on Wednesday at 7:00 PM.', img: 'https://picsum.photos/id/4/300/200' },
    { id: 5, title: 'Christmas Celebration', date: 'December 25, 2024', summary: 'Join us for the Christmas Celebration at 6:00 PM.', img: 'https://picsum.photos/id/5/300/200' }
  ];

  return (
    <div className="news-page">
      <section className="news-section">
        <h1>Event GPPK CBN</h1>
        <div className="news-scroll">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.img} alt={item.title} className="card-image" />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p className="date">{item.date}</p>
                <p>{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="news-section">
        <h1>Berita GPPK CBN</h1>
        <div className="news-scroll">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.img} alt={item.title} className="card-image" />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p className="date">{item.date}</p>
                <p>{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="news-section">
        <h1>Artikel dan Renungan </h1>
        <div className="news-scroll">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <img src={item.img} alt={item.title} className="card-image" />
              <div className="card-content">
                <h2>{item.title}</h2>
                <p className="date">{item.date}</p>
                <p>{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;
