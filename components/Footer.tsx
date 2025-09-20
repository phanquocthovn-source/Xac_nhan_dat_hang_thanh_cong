
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-midas-gray-light py-8">
      <div className="container mx-auto px-6 text-center text-midas-text/60">
        <div className="border-t border-gray-300 pt-8">
            <div className="font-serif text-2xl font-bold text-midas-text mb-2 tracking-wider">
                NỘI THẤT MIDAS
            </div>
            <p className="text-sm">
                © 2024 Nội thất Midas. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
