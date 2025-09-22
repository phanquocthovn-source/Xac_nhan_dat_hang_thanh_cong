import React from 'react';
import PhoneIcon from './icons/PhoneIcon';

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

interface OrderInfoSectionProps {
    orderDetails: OrderDetails;
}

const OrderInfoSection: React.FC<OrderInfoSectionProps> = ({ orderDetails }) => {
    return (
        <section className="section section--info">
            <div className="container">
                <div className="info-card">
                    <h2>Thông tin của bạn</h2>
                    <ul className="info-list">
                        <li><span>Họ và tên:</span> <strong>{orderDetails.name}</strong></li>
                        <li><span>Số điện thoại:</span> <strong>{orderDetails.phone}</strong></li>
                        <li><span>Địa chỉ:</span> <strong>{orderDetails.address}</strong></li>
                    </ul>

                    <h2>Thông tin đơn hàng</h2>
                    <ul className="info-list">
                        <li><span>Sản phẩm:</span> <strong>{orderDetails.product}</strong></li>
                        <li><span>Kích thước:</span> <strong>{orderDetails.size}</strong></li>
                        <li><span>Màu sắc:</span> <strong>{orderDetails.color}</strong></li>
                        <li><span>Hình thức thanh toán:</span> <strong>{orderDetails.paymentMethod}</strong></li>
                        <li><span>Tổng tiền:</span> <strong>{orderDetails.total}</strong></li>
                    </ul>
                    
                    <div className="notification-box">
                        <PhoneIcon className="notification-box__icon" />
                        <p>
                            Trong vòng 24 giờ làm việc (8h00 - 17h00), đội ngũ Midas sẽ <strong>gọi điện thoại</strong> cho bạn để xác nhận thông tin chi tiết.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderInfoSection;