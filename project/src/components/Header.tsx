import React from 'react';
import { Cloud } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-center md:justify-between">
        <div className="flex items-center">
          <Cloud className="h-8 w-8 mr-2" />
          <h1 className="text-2xl font-bold">Prakiraan Cuaca Klojen</h1>
        </div>
        <div className="hidden md:block text-sm opacity-80">
          <p>Kecamatan Klojen, Malang</p>
          <p>-7.973° S, 112.6087° E</p>
        </div>
      </div>
    </header>
  );
};

export default Header;