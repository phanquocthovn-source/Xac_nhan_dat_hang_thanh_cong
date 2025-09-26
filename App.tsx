import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import OrderInfoSection from './components/OrderInfoSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

// Tell TypeScript that 'ttq' is a global object for TikTok Pixel
declare const ttq: any;

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

            const details = {
                name: getData('ho_ten'),
                phone: getData('sdt'),
                address: getData('dia_chi'),
                product: getData('san_pham'),
                size: getData('kich_thuoc'),
                color: getData('mau_sac'),
                paymentMethod: getData('thanh_toan'),
                total: getData('tong_cong'),
            };

            setOrderDetails(details);

            // TikTok Pixel - Track Purchase Event
            if (typeof ttq !== 'undefined' && details.total !== fallbackText && details.product !== fallbackText) {
                // Remove currency symbols and formatting, then convert to a number
                const numericTotal = parseFloat(details.total.replace(/\./g, '').replace(/[^0-9]/g, ''));
                
                if (!isNaN(numericTotal)) {
                    // Wait for the TikTok pixel to be ready before tracking the event
                    ttq.ready(function() {
                        ttq.track('CompletePayment', {
                            content_name: details.product,
                            content_type: 'product',
                            value: numericTotal,
                            currency: 'VND', // Assuming currency is VND
                        });
                    });
                }
            }

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
