import React from 'react';
import type { CustomerInfo, OrderInfo } from '../types';
import PhoneIcon from './icons/PhoneIcon';

interface OrderInfoSectionProps {
  customer: CustomerInfo;
  order: OrderInfo;
}

const OrderInfoSection: React.FC<OrderInfoSectionProps> = ({ customer, order }) => {
  return (
    <section className="bg-midas-gray-light py-16 sm:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-midas-white rounded-lg shadow-sm p-8 sm:p-12">
          
          <h2 className="font-serif text-3xl font-bold text-midas-text mb-8 text-center">
            Xác nhận thông tin
          </h2>

          <div className="text-left text-midas-text">
            <h3 className="text-xl font-bold text-midas-text mb-4">Thông tin của bạn</h3>
            <div className="space-y-3 text-base leading-relaxed">
              <p><strong className="font-semibold">Họ và tên: </strong><span>{customer.name}</span></p>
              <p><strong className="font-semibold">Số điện thoại: </strong><span>{customer.phone}</span></p>
              <p><strong className="font-semibold">Địa chỉ: </strong><span>{customer.address}</span></p>
            </div>
            
            <hr className="my-8 border-t border-gray-200" />

            <h3 className="text-xl font-bold text-midas-text mb-4">Thông tin đơn hàng</h3>
            <div className="space-y-3 text-base leading-relaxed">
              <p><strong className="font-semibold">Sản phẩm: </strong><span>{order.productName}</span></p>
              <p><strong className="font-semibold">Kích thước: </strong><span>{order.size}</span></p>
              <p><strong className="font-semibold">Màu sắc: </strong><span>{order.color}</span></p>
              <p><strong className="font-semibold">Tổng tiền: </strong><span>{order.price}</span></p>
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