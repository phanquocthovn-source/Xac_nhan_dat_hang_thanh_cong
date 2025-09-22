import React from 'react';
import CheckIcon from './icons/CheckIcon';

const HeroSection = () => {
    return (
        <section className="section section--hero">
            <div className="container">
                <CheckIcon className="hero__icon" />
                <h1>Đặt hàng thành công!</h1>
                <p className="hero__description">
                    Cảm ơn bạn đã tin chọn sản phẩm của Nội thất Midas. Đơn hàng của bạn đã được ghi nhận.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
