import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="bg-midas-white py-16 sm:py-20 text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-start">
          
          {/* Part 1: Explore More */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-2xl font-bold text-midas-text mb-4 min-h-[4.5rem] flex items-center justify-center">
              Trong lúc chờ đợi, hãy khám phá thêm
            </h3>
            <a
              href="https://noithatmidas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-midas-accent text-white font-bold text-base py-3 px-8 rounded-md shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Xem các sản phẩm khác của Midas
            </a>
          </div>

          {/* Part 2: Community Connection */}
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-2xl font-bold text-midas-text mb-4 min-h-[4.5rem] flex items-center justify-center">
              Kết nối với chúng tôi
            </h3>
            <a
              href="https://www.facebook.com/ntmidas68"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block bg-midas-accent text-white font-bold text-base py-3 px-8 rounded-md shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Theo dõi trên Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;