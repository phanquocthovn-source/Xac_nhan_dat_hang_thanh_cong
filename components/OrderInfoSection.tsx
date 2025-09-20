
import React from 'react';
import type { CustomerInfo } from '../types';
import PhoneIcon from './icons/PhoneIcon';

interface OrderInfoSectionProps {
  customer: CustomerInfo;
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-gray-200 last:border-b-0">
    <p className="w-full sm:w-1/3 text-md text-midas-text/70 mb-1 sm:mb-0">{label}</p>
    <p className="w-full sm:w-2/3 text-md font-semibold text-midas-text">{value}</p>
  </div>
);

const OrderInfoSection: React.FC<OrderInfoSectionProps> = ({ customer }) => {
  return (
    <section className="bg-midas-gray-light py-16 sm:py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="bg-midas-white rounded-lg shadow-sm p-8 sm:p-12">
          <h2 className="font-serif text-3xl font-bold text-midas-text mb-8 text-center">
            Thông tin của bạn
          </h2>
          <div className="space-y-2 mb-8">
            <InfoRow label="Họ và tên:" value={customer.name} />
            <InfoRow label="Số điện thoại:" value={customer.phone} />
            <InfoRow label="Địa chỉ:" value={customer.address} />
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
