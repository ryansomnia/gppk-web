import React from 'react';
import { Instagram, Youtube, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <div className="text-center sm:text-left">
          <h2 className="text-white text-2xl font-bold mb-1">GPPK CBN © {new Date().getFullYear()}</h2>
          <p className="text-gray-400">
            Website by{' '}
            <a
              href="https://www.heriyantositorus.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 font-semibold no-underline"
            >
              ryansomnia DEV
            </a>
          </p>
        </div>

        <div className="flex justify-center sm:justify-end space-x-6">
          <motion.a
            href="https://www.instagram.com/gppkcbn/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 no-underline"
          >
            <Instagram className="mr-2" />
            Instagram
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@gppkcbn5941"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center text-white hover:text-yellow-400 transition-colors duration-200 no-underline"
          >
            <Youtube className="mr-2" />
            YouTube
          </motion.a>

          <motion.a
            href="https://maps.app.goo.gl/bLSALqPtCutmFjjC9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className=" flex items-center text-white hover:text-yellow-400 transition-colors duration-200 no-underline"
          >
            <MapPin className="mr-2" />
            Lokasi Kami
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
