import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OrderInfoSection from './components/OrderInfoSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import type { CustomerInfo, OrderInfo } from './types';

const App: React.FC = () => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
  });
  const [orderInfo, setOrderInfo] = useState<OrderInfo>({
    productName: '',
    size: '',
    color: '',
    price: '',
  });

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const fallbackText = 'Chưa có thông tin';

      // Lấy thông tin khách hàng
      const name = params.get('ho_ten') || fallbackText;
      const phone = params.get('sdt') || fallbackText;
      const address = params.get('dia_chi') || fallbackText;
      setCustomerInfo({ name, phone, address });

      // Lấy thông tin đơn hàng
      const productName = params.get('san_pham') || fallbackText;
      const size = params.get('kich_thuoc') || fallbackText;
      const color = params.get('mau_sac') || fallbackText;
      const price = params.get('gia_tien') || fallbackText;
      setOrderInfo({ productName, size, color, price });

    } catch (e) {
      console.error('Lỗi khi đọc thông tin từ URL:', e);
    }
  }, []); // Mảng rỗng đảm bảo hiệu ứng này chỉ chạy một lần khi component được mount

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <OrderInfoSection customer={customerInfo} order={orderInfo} />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;