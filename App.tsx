
import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OrderInfoSection from './components/OrderInfoSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import type { CustomerInfo } from './types';

const App: React.FC = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      // Sử dụng giá trị mặc định nếu tham số không có trên URL
      const name = params.get('ho_ten') || 'Chưa cung cấp';
      const phone = params.get('sdt') || 'Chưa cung cấp';
      const address = params.get('dia_chi') || 'Chưa cung cấp';

      setCustomerInfo({ name, phone, address });
    } catch (e) {
      console.error('Lỗi khi đọc thông tin khách hàng từ URL:', e);
    }
  }, []); // Mảng rỗng đảm bảo hiệu ứng này chỉ chạy một lần khi component được mount

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
