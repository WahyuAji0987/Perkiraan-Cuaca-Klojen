import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-4 text-center text-gray-600 text-sm">
      <p>Data cuaca disediakan oleh <a href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Open-Meteo.com</a></p>
      <p className="mt-1">© {new Date().getFullYear()} Prakiraan Cuaca Klojen</p>
    </footer>
  );
};

export default Footer;