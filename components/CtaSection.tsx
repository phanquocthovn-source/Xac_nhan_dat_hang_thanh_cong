import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';

const CtaSection = () => {
    return (
        <section className="section section--cta">
            <div className="container">
                <div className="cta-container">
                    <div className="cta-group">
                        <h3>Trong lúc chờ đợi, hãy khám phá thêm</h3>
                        <a href="https://noithatmidas.com/" className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                            Xem các sản phẩm khác của Midas
                        </a>
                    </div>
                    <div className="cta-group">
                        <h3>Kết nối với chúng tôi</h3>
                        <a href="https://www.facebook.com/ntmidas68" className="btn btn--secondary" target="_blank" rel="noopener noreferrer">
                            Theo dõi trên Facebook
                        </a>
                    </div>
                </div>
                <div style={{ marginTop: '3rem' }}>
                    <button
                        onClick={() => window.history.back()}
                        className="btn btn--secondary"
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                        aria-label="Quay lại trang trước"
                    >
                        <ArrowLeftIcon style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                        Quay lại trang trước
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;