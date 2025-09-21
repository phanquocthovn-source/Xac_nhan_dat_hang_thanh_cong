
import React from 'react';
import type { CustomerInfo } from '../types';
import PhoneIcon from './icons/PhoneIcon';

interface OrderInfoSectionProps {
  customer: CustomerInfo;
}

const OrderInfoSection: React.FC<OrderInfoSectionProps> = ({ customer }) => {
  return (
    <section className="bg-midas-gray-light py-16 sm:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-midas-white rounded-lg shadow-sm p-8 sm:p-12">
          <h2 className="font-serif text-3xl font-bold text-midas-text mb-8 text-center">
            Thông tin của bạn
          </h2>
          
          <div className="space-y-3 mb-8 text-md">
            <p className="text-midas-text/80">
              Họ và tên: <strong id="customer-name" className="font-semibold text-midas-text">{customer.name}</strong>
            </p>
            <p className="text-midas-text/80">
              Số điện thoại: <strong id="customer-phone" className="font-semibold text-midas-text">{customer.phone}</strong>
            </p>
            <p className="text-midas-text/80">
              Địa chỉ: <strong id="customer-address" className="font-semibold text-midas-text">{customer.address}</strong>
            </p>
          </div>

          <div className="mt-10 bg-midas-accent/10 border-l-4 border-midas-accent p-4 rounded-r-md">
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
