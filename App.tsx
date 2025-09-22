import React, { useState, useEffect } from 'react';

const App = () => {
    const [customerInfo, setCustomerInfo] = useState({
        name: 'Chưa có thông tin',
        phone: 'Chưa có thông tin',
        address: 'Chưa có thông tin',
    });

    const [orderInfo, setOrderInfo] = useState({
        productName: 'Chưa có thông tin',
        size: 'Chưa có thông tin',
        color: 'Chưa có thông tin',
        paymentMethod: 'Chưa có thông tin',
        price: 'Chưa có thông tin',
    });

    useEffect(() => {
        try {
            const params = new URLSearchParams(window.location.search);
            const fallbackText = 'Chưa có thông tin';

            const getData = (paramName: string): string => {
                const value = params.get(paramName);
                return value ? decodeURIComponent(value.replace(/\+/g, ' ')) : fallbackText;
            };

            setCustomerInfo({
                name: getData('ho_ten'),
                phone: getData('sdt'),
                address: getData('dia_chi'),
            });

            setOrderInfo({
                productName: getData('san_pham'),
                size: getData('kich_thuoc'),
                color: getData('mau_sac'),
                paymentMethod: getData('hinh_thuc_thanh_toan'),
                price: getData('gia_tien'),
            });
        } catch (e) {
            console.error('Lỗi khi hiển thị thông tin:', e);
        }
    }, []);

    return (
        <div className="confirmation-box">
            <h1>Xác nhận thông tin</h1>
            <div>
                <h3>Thông tin của bạn</h3>
                <p><strong>Họ và tên:</strong> <span>{customerInfo.name}</span></p>
                <p><strong>Số điện thoại:</strong> <span>{customerInfo.phone}</span></p>
                <p><strong>Địa chỉ:</strong> <span>{customerInfo.address}</span></p>
                <h3>Thông tin đơn hàng</h3>
                <p><strong>Sản phẩm:</strong> <span>{orderInfo.productName}</span></p>
                <p><strong>Kích thước:</strong> <span>{orderInfo.size}</span></p>
                <p><strong>Màu sắc:</strong> <span>{orderInfo.color}</span></p>
                <p><strong>Hình thức thanh toán:</strong> <span>{orderInfo.paymentMethod}</span></p>
                <p><strong>Tổng tiền:</strong> <span>{orderInfo.price}</span></p>
            </div>
            <div className="notice">
                Trong vòng 24 giờ làm việc (8h00 - 17h00), đội ngũ Midas sẽ <strong>gọi điện thoại</strong> cho bạn để xác nhận thông tin chi tiết.
            </div>
            <div className="back-link">
                <a href="https://sofabed.noithatmidas.com/">&larr; Quay lại trang chủ</a>
            </div>
        </div>
    );
};

export default App;
