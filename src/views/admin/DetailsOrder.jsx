
const DetailsOrder = () => {
  const orderItems = [
    { id: 1, title: 'Long Tshirt', brand: 'Easy Quantitty', qty: 2, image: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, title: 'Long Tshirt', brand: 'Easy Quantitty', qty: 2, image: 'https://i.pravatar.cc/150?img=12' },
    { id: 3, title: 'Long Tshirt', brand: 'Easy Quantitty', qty: 2, image: 'https://i.pravatar.cc/150?img=13' },
  ];

  const sellerOrders = [
    { id: 1, seller: 'Seller 1 Order :', title: 'Long Tshirt', brand: 'Easy Quantitty', qty: 2, image: 'https://i.pravatar.cc/150?img=11' },
    { id: 2, seller: 'Seller 2 Order :', title: 'Long Tshirt', brand: 'Easy Quantitty', qty: 2, image: 'https://i.pravatar.cc/150?img=12' },
  ];

  return (
    <div className="min-h-screen bg-[#d6d8f5] p-4 md:p-10 flex items-center justify-center font-sans">
      
      <div className="w-full max-w-5xl bg-[#6a5fdf] rounded-xl shadow-2xl p-5 md:p-8 flex flex-col gap-8">
        
        <div className="flex justify-between items-start md:items-center">
          <h2 className="text-white text-xl font-medium">Order Details</h2>
          <div className="relative">
            <select className="bg-[#4d454e] text-gray-300 text-sm rounded-md px-4 py-1.5 outline-none appearance-none cursor-pointer pr-8">
              <option>pending</option>
              <option>completed</option>
              <option>processing</option>
              <option>warehouse</option>
              <option>placed</option>
              <option>cancelled</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="flex-1 flex flex-col gap-6">
            
            <div className="text-sm space-y-1.5 text-[#d0d2d6]">
              <p className="text-white font-medium text-base">#454545 <span className="text-gray-300 font-normal ml-2">3 dec 2023</span></p>
              <p className="text-white font-medium">Deliver to : <span className="text-gray-300 font-normal">Raju Khan</span></p>
              <p className="leading-relaxed text-xs mt-2">2504 Iowa Avenue, Egg Harbor Township, NJ 08234, USA</p>
              <p>Payment Status <span className="text-white ml-1">paid</span></p>
              <p className="text-base pt-1">Price : <span className="text-white font-semibold">$5343</span></p>
            </div>

            <div className="flex flex-col gap-3">
              {orderItems.map((item) => (
                <div key={item.id} className="bg-[#8b82ea] rounded-md p-2.5 flex items-center gap-3">
                  <img src={item.image} alt="product" className="w-10 h-10 rounded-md object-cover border border-[#6a5fdf]" />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">{item.title}</span>
                    <span className="text-[#d0d2d6] text-xs">Brand : {item.brand} : {item.qty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-[#7c73e8] rounded-lg p-5 flex flex-col gap-5">
            {sellerOrders.map((order) => (
              <div key={order.id} className="flex flex-col gap-2">
                <div className="text-[#d0d2d6] text-xs flex gap-2">
                  <span>{order.seller}</span>
                  <span className="text-white">pending</span>
                </div>
                <div className="bg-[#6a5fdf]/50 rounded-md p-2.5 flex items-center gap-3">
                  <img src={order.image} alt="seller product" className="w-10 h-10 rounded-md object-cover border border-[#8b82ea]" />
                  <div className="flex flex-col">
                    <span className="text-white text-sm font-medium">{order.title}</span>
                    <span className="text-[#d0d2d6] text-xs">Brand : {order.brand} : {order.qty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsOrder;
