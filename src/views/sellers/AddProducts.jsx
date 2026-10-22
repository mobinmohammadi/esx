import  { useState } from 'react';
import { Camera, X } from 'lucide-react';

const AddProduct = () => {
  // استیت برای مدیریت عکس آپلود شده (فعلاً یک عکس نمونه گذاشتم)
  const [imagePreview, setImagePreview] = useState(
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' // عکس نمونه
  );

  // استایل مشترک برای فیلدهای ورودی
  const inputClass = "w-full bg-transparent border border-white/30 rounded-md px-4 py-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white/70 transition-colors";
  const labelClass = "block text-white/90 text-sm mb-1.5";

  return (
    // کانتینر اصلی با رنگ بنفش پس‌زمینه
    <div className="min-h-screen bg-[#6b72e0] p-4 md:p-8 font-sans">
      
      <div className="max-w-6xl mx-auto">
        
        {/* هدر صفحه */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h1 className="text-2xl font-semibold text-white">Add Product</h1>
          <button className="bg-[#8e9bff] hover:bg-[#7a88f2] text-white px-4 py-2 rounded-md text-sm transition-colors">
            All Products
          </button>
        </div>

        {/* فرم */}
        <form className="space-y-4">
          
          {/* ردیف اول: نام محصول و برند */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Product Name</label>
              <input type="text" placeholder="Product Name" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Brand Name</label>
              <input type="text" placeholder="Brand Name" className={inputClass} />
            </div>
          </div>

          {/* ردیف دوم: دسته‌بندی و موجودی */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Category</label>
              <select className={`${inputClass} appearance-none cursor-pointer`}>
                <option value="" className="text-gray-800">--select category--</option>
                <option value="electronics" className="text-gray-800">Electronics</option>
                <option value="clothing" className="text-gray-800">Clothing</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Product Stock</label>
              <input type="number" placeholder="Product Stock" className={inputClass} />
            </div>
          </div>

          {/* ردیف سوم: قیمت و تخفیف */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Price</label>
              <input type="number" placeholder="price" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Discount</label>
              <input type="number" placeholder="% Discount" className={inputClass} />
            </div>
          </div>

          {/* توضیحات */}
          <div>
            <label className={labelClass}>Description</label>
            <textarea 
              rows="3" 
              placeholder="description" 
              className={`${inputClass} resize-none`}
            ></textarea>
          </div>

          {/* بخش آپلود تصویر */}
          <div className="flex flex-wrap gap-4 pt-2">
            
            {/* پیش‌نمایش تصویر آپلود شده */}
            {imagePreview && (
              <div className="relative w-40 h-40 rounded-lg overflow-hidden group">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
                {/* دکمه حذف عکس */}
                <button 
                  type="button"
                  onClick={() => setImagePreview(null)}
                  className="absolute top-2 right-2 bg-gray-900/60 hover:bg-gray-900/90 text-white rounded-full p-1 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}

            {/* باکس دراپ‌زون (آپلود) */}
            <div className="w-40 h-40 border-2 border-dashed border-white/40 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
              <Camera className="text-white/70 mb-2" size={24} />
              <span className="text-white/70 text-sm">select image</span>
              {/* ورودی فایل مخفی برای انتخاب عکس */}
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setImagePreview(URL.createObjectURL(file));
                  }
                }}
              />
            </div>
            
          </div>

          {/* دکمه ثبت */}
          <div className="pt-4">
            <button 
              type="submit" 
              className="bg-[#ff5745] hover:bg-[#f04735] text-white px-6 py-2.5 rounded-md font-medium transition-colors"
            >
              Add Product
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddProduct;