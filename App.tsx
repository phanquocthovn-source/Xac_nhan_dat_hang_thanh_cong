import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OrderInfoSection from './components/OrderInfoSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

interface OrderDetails {
    name: string;
    phone: string;
    address: string;
    product: string;
    size: string;
    color: string;
    paymentMethod: string;
    total: string;
}

const App = () => {
    const [orderDetails, setOrderDetails] = useState<OrderDetails>({
        name: 'Chưa có thông tin',
        phone: 'Chưa có thông tin',
        address: 'Chưa có thông tin',
        product: 'Chưa có thông tin',
        size: 'Chưa có thông tin',
        color: 'Chưa có thông tin',
        paymentMethod: 'Chưa có thông tin',
        total: 'Chưa có thông tin',
    });

    useEffect(() => {
        try {
            const params = new URLSearchParams(window.location.search);
            const fallbackText = 'Chưa có thông tin';

            const getData = (paramName: string): string => {
                const value = params.get(paramName);
                return value ? decodeURIComponent(value.replace(/\+/g, ' ')) : fallbackText;
            };

            setOrderDetails({
                name: getData('ho_ten'),
                phone: getData('sdt'),
                address: getData('dia_chi'),
                product: getData('san_pham'),
                size: getData('kich_thuoc'),
                color: getData('mau_sac'),
                paymentMethod: getData('thanh_toan'),
                total: getData('tong_tien'),
            });

        } catch (e) {
            console.error('Lỗi khi hiển thị thông tin:', e);
        }
    }, []);

    return (
        <main>
            <HeroSection />
            <OrderInfoSection orderDetails={orderDetails} />
            <CtaSection />
            <Footer />
        </main>
    );
};

export default App;