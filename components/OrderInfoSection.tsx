import React from 'react';
import type { CustomerInfo, OrderInfo } from '../types';
import PhoneIcon from './icons/PhoneIcon';

interface OrderInfoSectionProps {
  customer: CustomerInfo;
  order: OrderInfo;
}

const InfoRow: React.FC<{ label: string; id: string; value: string }> = ({ label, id, value }) => (
  <p className="text-midas-text/90">
    <strong className="font-semibold text-midas-text">{label}:</strong>{' '}
    <span id={id}>{value}</span>
  </p>
);

const OrderInfoSection: React.FC<OrderInfoSectionProps> = ({ customer, order }) => {
  return (
    <section className="bg-midas-gray-light py-16 sm:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-midas-white rounded-lg shadow-sm p-8 sm:p-12">
          
          <h2 className="font-serif text-3xl font-bold text-midas-text mb-8 text-center">
            Xác nhận thông tin
          </h2>

          <div id="thong-tin-xac-nhan">
            <h3 className="font-serif text-2xl font-bold text-midas-text mb-4">Thông tin của bạn</h3>
            <div className="space-y-3 text-md">
              <InfoRow label="Họ và tên" id="customer-name" value={customer.name} />
              <InfoRow label="Số điện thoại" id="customer-phone" value={customer.phone} />
              <InfoRow label="Địa chỉ" id="customer-address" value={customer.address} />
            </div>
            
            <hr className="border-0 border-t border-gray-200 my-8" />

            <h3 className="font-serif text-2xl font-bold text-midas-text mb-4">Thông tin đơn hàng</h3>
            <div className="space-y-3 text-md">
                <InfoRow label="Sản phẩm" id="product-name" value={order.productName} />
                <InfoRow label="Kích thước" id="product-size" value={order.size} />
                <InfoRow label="Màu sắc" id="product-color" value={order.color} />
                <InfoRow label="Tổng tiền" id="product-price" value={order.price} />
            </div>
          </div>

          <div className="mt-12 bg-midas-accent/10 border-l-4 border-midas-accent p-4 rounded-r-md">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <PhoneIcon className="h-6 w-6 text-midas-accent" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-midas-text/90">
                  Trong vòng 24 giờ làm việc (8h00 - 17h00), đội ngũ Midas sẽ <strong className="font-semibold">gọi điện thoại</strong> cho bạn để xác nhận thông tin chi tiết.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInfoSection;