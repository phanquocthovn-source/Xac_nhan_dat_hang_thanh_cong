
import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import OrderInfoSection from './components/OrderInfoSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import type { CustomerInfo } from './types';

const App: React.FC = () => {
  // In a real application, this data would be passed from the order page
  // via props, context, or a state management library.
  const [customerInfo] = useState<CustomerInfo>({
    name: 'Nguyễn Văn An',
    phone: '0987 654 321',
    address: '123 Đường ABC, Phường X, Quận Y, TP. Hồ Chí Minh',
  });

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <OrderInfoSection customer={customerInfo} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
