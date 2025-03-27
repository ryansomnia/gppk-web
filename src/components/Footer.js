import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="text-center sm:mb-0 my-3">
          <p className="text-lg text-white mb-0">
            GPPK CBN © {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <p className="text-xs mb-0 text-gray-500">
            Website created by{' '}
            <a
              href="https://www.heriyantositorus.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-100 no-underline hover:text-yellow-400"
            >
              ryansomnia DEV
            </a>
          </p>
        </div>
        <div className=" justify-center space-x-4 hidden sm:flex">
          <a
            href="https://www.instagram.com/gppkcbn/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-gray-300 hover:text-yellow-400 flex items-center"
          >
            <InstagramIcon className="mr-1" /> Instagram
          </a>
          <a
            href="https://www.youtube.com/@gppkcbn5941"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-gray-300 hover:text-yellow-400 flex items-center"
          >
            <YouTubeIcon className="mr-1" /> YouTube
          </a>
          <a
            href="https://maps.app.goo.gl/bLSALqPtCutmFjjC9"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-gray-300 hover:text-yellow-400 flex items-center"
          >
            <LocationOnIcon className="mr-1" /> Lokasi kami
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;