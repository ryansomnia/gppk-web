const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// 1. Daftarkan semua URL halaman React Anda di sini
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.7 },
  { url: '/kka', changefreq: 'monthly', priority: 0.8 },
  { url: '/service', changefreq: 'weekly', priority: 0.5 },
  { url: '/giving', changefreq: 'weekly', priority: 0.5 },
  { url: '/cerdasbangsa', changefreq: 'weekly', priority: 0.5 },
];

const stream = new SitemapStream({ hostname: 'https://gppkcbn.org' }); // Ubah ke domain Anda

// 2. Tentukan lokasi output ke folder 'public' agar bisa diakses Google
// Jika pakai Vite/CRA, folder 'public' akan di-copy otomatis ke folder build (dist/build)
const writeStream = createWriteStream(path.join(__dirname, 'public', 'sitemap.xml'));


// PERBAIKAN: Pipe dijalankan, tapi streamToPromise membaca objek 'stream' utama
stream.pipe(writeStream);

streamToPromise(stream)
  .then(() => console.log('✅ sitemap.xml berhasil dibuat di folder public!'))
  .catch(console.error);

// 4. Masukkan data link ke dalam stream
links.forEach(link => stream.write(link));
stream.end();