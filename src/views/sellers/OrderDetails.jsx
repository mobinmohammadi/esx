import React from 'react';

export default function OrderDetails() {
  return (
    // بک‌گراند اصلی صفحه
    <div className="min-h-screen bg-[#8b8de0] p-4 md:p-8 font-sans text-white flex justify-center items-center">
      
      {/* کارت اصلی */}
      <div className="w-full max-w-3xl bg-[#7b7dd4] rounded-xl p-6 md:p-8 shadow-lg">
        
        {/* هدر: عنوان و منوی کشویی */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 border-b border-white/10 pb-4">
          <h2 className="text-lg md:text-xl font-medium text-white/90">Order Details</h2>
          
          <div className="relative">
            <select className="appearance-none bg-[#4a5568] text-white px-4 py-2 pr-10 rounded-md text-sm focus:outline-none cursor-pointer">
              <option value="pending">pending</option>
              <option value="completed">completed</option>
              <option value="cancelled">cancelled</option>
            </select>
            {/* آیکون فلش برای منوی کشویی */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* بخش اطلاعات سفارش */}
        <div className="flex flex-col gap-1.5 text-sm md:text-base mb-6">
          <p className="text-white/80">
            #34344 <span className="ml-2">3 Jan 2024</span>
          </p>
          <p className="text-white/90">
            Deliver To : <span className="font-medium text-white">WareHouse</span>
          </p>
          <p className="text-white/90">
            Payment Status : <span className="text-white">Paid</span>
          </p>
          <p className="text-white/90 flex items-center gap-2">
            Price : <span className="text-white">$232</span>
            {/* دایره قرمز کوچک که احتمالاً نشانگر وضعیت است */}
            <span className="w-3.5 h-3.5 rounded-full border-2 border-[#ff5c5c] inline-block ml-1"></span>
          </p>
        </div>

        {/* لیست محصولات */}
        <div className="flex flex-col gap-3">
          
          {/* محصول ۱ */}
          <div className="bg-[#8b8de0] rounded-lg p-3 flex items-center gap-4 w-full md:w-3/4 lg:w-2/3">
            {/* تصویر محصول (آیکون تی‌شرت مشکی) */}
            <div className="w-12 h-12 bg-[#2d2d2d] rounded-sm flex items-center justify-center shrink-0 overflow-hidden">
               {/* از یک ایموجی یا تصویر برای شبیه‌سازی استفاده شده است */}
               <span className="text-2xl">👕</span>
            </div>
            <div>
              <div className="font-medium text-sm text-white/95">Product Name here</div>
              <div className="text-xs text-white/70 mt-0.5">Brand : EasyQuantity : 3</div>
            </div>
          </div>

          {/* محصول ۲ */}
          <div className="bg-[#8b8de0] rounded-lg p-3 flex items-center gap-4 w-full md:w-3/4 lg:w-2/3">
            <div className="w-12 h-12 bg-[#2d2d2d] rounded-sm flex items-center justify-center shrink-0 overflow-hidden">
               <span className="text-2xl">👕</span>
            </div>
            <div>
              <div className="font-medium text-sm text-white/95">Product Name here</div>
              <div className="text-xs text-white/70 mt-0.5">Brand : EasyQuantity : 3</div>
            </div>
          </div>

          {/* محصول ۳ */}
          <div className="bg-[#8b8de0] rounded-lg p-3 flex items-center gap-4 w-full md:w-3/4 lg:w-2/3">
            <div className="w-12 h-12 bg-[#2d2d2d] rounded-sm flex items-center justify-center shrink-0 overflow-hidden">
               <span className="text-2xl">👕</span>
            </div>
            <div>
              <div className="font-medium text-sm text-white/95">Product Name here</div>
              <div className="text-xs text-white/70 mt-0.5">Brand : EasyQuantity : 3</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}