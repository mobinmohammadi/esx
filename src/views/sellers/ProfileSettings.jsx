import { useDispatch, useSelector } from "react-redux";
import {
  change_Details_Shop,
  messageClear,
  update_profail,
} from "../../store/Reducers/authReducers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfileSettings() {
  const handelChangeShopDetails = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const { userInfo, successMessage, errorMessage } = useSelector(
    (state) => state.auth,
  );

  const [state, setState] = useState({
    division: userInfo.shopInfo.division || "",
    district: userInfo.shopInfo.district || "",
    shopname: userInfo.shopInfo.shopname || "",
    sub_district: userInfo.shopInfo.sub_district || "",
  });
  const dispatch = useDispatch();

  const changerProfail = (e) => {
    const newImage = e.target.files[0];

    dispatch(update_profail(newImage));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);

      dispatch(messageClear());
      console.log("djh");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const saveChageDetailsShop = (e) => {
    e.preventDefault();
    dispatch(change_Details_Shop(state));
  };
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
              <label htmlFor="upload-image">
                {/* به جای src، آدرس عکس واقعی خود را قرار دهید */}
                <input
                  onChange={(e) => changerProfail(e)}
                  type="file"
                  name="upload-image"
                  id="upload-image"
                  className="hidden cursor-pointer"
                />
                <img
                  src={userInfo?.image}
                  alt="Profile"
                  className="w-full h-full object-cover "
                />
              </label>
            </div>
          </div>

          {/* کارت اطلاعات کاربر (خاکستری تیره) */}
          <div className="bg-[#4a5568] rounded-lg p-5 mb-8 relative">
            {/* آیکون ویرایش در گوشه */}
            <button className="absolute top-4 right-4 bg-yellow-400 text-black p-1.5 rounded-md hover:bg-yellow-300 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-gray-300">Name:</span>
                {userInfo.name}{" "}
              </p>
              <p>
                <span className="text-gray-300">Email:</span> {userInfo.email}
              </p>
              <p>
                <span className="text-gray-300">Role:</span> {userInfo.role}
              </p>
              <p>
                <span className="text-gray-300">Status:</span> 
                
                {userInfo.status}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">Payment Account :</span>
                <span className="bg-yellow-400 text-black px-2 py-0.5 rounded text-xs font-semibold">
                  {userInfo.payment}
                </span>
              </div>
            </div>
          </div>

          {/* فرم تنظیمات فروشگاه */}
          <form onSubmit={saveChageDetailsShop} className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-white/90">
                Shop Name
              </label>
              <input
                onChange={handelChangeShopDetails}
                type="text"
                id="shopname"
                value={state.shopname}
                name="shopname"
                placeholder="Shop Name"
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">
                Division Name
              </label>
              <input
                onChange={handelChangeShopDetails}
                type="text"
                value={state.division}
                id="division"
                name="division"
                placeholder="division Name"
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">
                District Name
              </label>
              <input
                type="text"
                value={state.district}
                onChange={handelChangeShopDetails}
                id="district"
                name="district"
                placeholder="district Name"
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">
                Sub District
              </label>
              <input
                type="text"
                value={state.sub_district}
                onChange={handelChangeShopDetails}
                id="sub_district"
                name="sub_district"
                placeholder="subDistrict Name"
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <button className="bg-[#ff3b3b] hover:bg-red-600 transition-colors text-white px-6 py-2 rounded-md font-medium text-sm mt-4">
              Save Changes
            </button>
          </form>
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
              <label className="block text-sm mb-1 text-white/90">
                Password
              </label>
              <input
                type="password"
                placeholder="Old password"
                className="w-full bg-[#8b8de0] border border-white/40 rounded-md px-3 py-2.5 text-white placeholder-white/50 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-white/90">
                New Password
              </label>
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
