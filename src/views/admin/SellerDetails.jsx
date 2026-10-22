
const SellerDetails = () => {
  return (
    <div className="min-h-70 bg-[#7c7cf0] flex items-center justify-center p-4 font-sans text-white">
      
      <div className="w-full max-w-5xl p-8">
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          <div className="shrink-0">
            <img 
              src="../../../public/images/admin1.jfif"
              className="w-40 h-40 object-cover rounded-md border-2 border-transparent bg-gray-600"
            />
          </div>

          <div className="grow grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div>
              <h3 className="text-white/80 text-lg mb-2 pl-1">Basic Info</h3>
              <div className="bg-[#9a9af5] rounded-lg p-5 shadow-sm text-sm space-y-2 text-gray-800 font-medium">
                <p><span className="font-bold text-gray-900">Name :</span>Mobin Mohammadi</p>
                <p><span className="font-bold text-gray-900">Email :</span> mobin@gmail.com</p>
                <p><span className="font-bold text-gray-900">Role :</span> seller</p>
                <p><span className="font-bold text-gray-900">Status :</span> Active</p>
                <p><span className="font-bold text-gray-900">Payment Status :</span> Active</p>
              </div>
            </div>

            <div>
              <h3 className="text-white/80 text-lg mb-2 pl-1">Address</h3>
              <div className="bg-[#9a9af5] rounded-lg p-5 shadow-sm text-sm space-y-2 text-gray-800 font-medium">
                <p><span className="font-bold text-gray-900">Shop Name :</span> Easy Shop</p>
                <p><span className="font-bold text-gray-900">Division :</span> Rozhwebs</p>
                <p><span className="font-bold text-gray-900">District :</span> Rozhwebs</p>
                <p><span className="font-bold text-gray-900">State :</span> Rozhwebs</p>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-6 md:pl-48"> 
          
          <div className="relative">
            <select className="appearance-none bg-[#8b8bf3] border border-indigo-300 text-white py-2 px-4 pr-10 rounded-md focus:outline-none focus:border-indigo-500 w-40 cursor-pointer">
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg className="fill-current h-4 w-4" xmlns="http://localhost:5173/images/admin1.jfif" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>

          <button className="bg-[#ff4d4d] hover:bg-red-500 text-white font-medium py-2 px-10 rounded-md transition duration-200 w-40">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
};

export default SellerDetails;



