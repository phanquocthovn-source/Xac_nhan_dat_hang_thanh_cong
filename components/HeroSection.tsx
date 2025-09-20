import React, { useEffect } from 'react';
import CheckIcon from './icons/CheckIcon';

// Let TypeScript know that 'confetti' is available globally from the script tag in index.html
declare const confetti: any;

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Confetti animation logic
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#FF6B00', '#FFFFFF', '#333333', '#F5F5F5']
    };

    function fire(particleRatio: number, opts: object) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <section className="bg-midas-white py-16 sm:py-24 text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <CheckIcon className="w-20 h-20 mx-auto mb-6" />
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-midas-text mb-4">
          Đặt hàng thành công!
        </h1>
        <p className="text-lg text-midas-text/80 leading-relaxed">
          Cảm ơn bạn đã tin chọn sản phẩm của Nội thất Midas. Đơn hàng của bạn đã được ghi nhận.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;