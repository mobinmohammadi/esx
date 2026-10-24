
export default function ProfileSettings() {
  return (
    // بک‌گراند اصلی صفحه
    <div className="min-h-screen bg-[#dcdcf0] p-4 md:p-8 font-sans text-white flex justify-center items-start">
      
      {/* کانتینر اصلی: در دسکتاپ دو ستونه، در موبایل یک ستونه */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ======================= ستون سمت چپ (پروفایل و تنظیمات فروشگاه) ======================= */}
        <div className="bg-[#7b7dd4] rounded-xl p-6 shadow-md">
          
          {/* بخش عکس پروفایل */}
          <div className="flex justify-center mb-6">
            <div className="w-42 h-58 bg-gray-400 overflow-hidden rounded-sm border-2 border-white/20">
              {/* به جای src، آدرس عکس واقعی خود را قرار دهید */}
              <img 
                src="/images/MobinRc.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* کارت اطلاعات کاربر (خاکستری تیره) */}
          <div className="bg-[#4a5568] rounded-lg p-5 mb-8 relative">
            {/* آیکون ویرایش در گوشه */}
            <button className="absolute top-4 right-4 bg-yellow-400 text-black p-1.5 rounded-md hover:bg-yellow-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>

            <div className="space-y-2 text-sm">
              <p><span className="text-gray-300">Name:</span>  Mobin </p>
              <p><span className="text-gray-300">Email:</span> mobin@gmail.com</p>
              <p><span className="text-gray-300">Role:</span> Seller</p>
              <p><span className="text-gray-300">Status:</span> Active</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Payment Account :</span>
                <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-xs font-semibold">
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* فرم تنظیمات فروشگاه */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-white/90">Shop Name</label>
              <input 
                type="text" 
                placeholder="Shop Name" 
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>
            
            <div>
              <label className="block text-sm mb-1 text-white/90">Division Name</label>
              <input 
                type="text" 
                placeholder="division Name" 
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">District Name</label>
              <input 
                type="text" 
                placeholder="district Name" 
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">Sub District</label>
              <input 
                type="text" 
                placeholder="subDistrict Name" 
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <button className="bg-[#ff3b3b] hover:bg-red-600 transition-colors text-white px-6 py-2 rounded-md font-medium text-sm mt-4">
              Save Changes
            </button>
          </div>
        </div>

        {/* ======================= ستون سمت راست (تغییر رمز عبور) ======================= */}
        <div className="bg-[#7b7dd4] rounded-xl p-6 shadow-md h-fit">
          <h2 className="text-lg mb-6">Change Password</h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-white/90">Email</label>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">Password</label>
              <input 
                type="password" 
                placeholder="Old password" 
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">New Password</label>
              <input 
                type="password" 
                placeholder="New Password" 
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <button className="bg-[#ff3b3b] hover:bg-red-600 transition-colors text-white px-6 py-2.5 rounded-md font-medium text-sm mt-2">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}