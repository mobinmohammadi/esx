import { useState } from 'react';


const initialData = [
  { id: 1, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 2, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 3, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 4, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 5, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 6, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 7, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 8, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 9, amount: '43434', status: 'pending', date: '12 Jun 2023' },
  { id: 10, amount: '43434', status: 'pending', date: '12 Jun 2023' },
];

const Payments = () => {
      const [inputValue, setInputValue] = useState('0');

    return (
    <div className="min-h-screen bg-[#8b8de0] p-4 md:p-8 font-sans text-white flex items-center justify-center">
      
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="flex flex-col gap-6">
          
          <div className="bg-[#7b7dd4] rounded-2xl p-6 shadow-lg">
            <h2 className="text-lg mb-4">Send Request</h2>
            <div className="flex gap-4">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-[#8b8de0] border border-white/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-[#ff3b3b] hover:bg-red-600 transition-colors text-white px-6 py-2 rounded-lg font-medium">
                Submit
              </button>
            </div>
          </div>

          <div className="bg-[#7b7dd4] rounded-2xl p-6 shadow-lg flex-1">
            <h2 className="text-lg mb-4">Pending Request</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#9a9ce6] text-white/80 text-sm">
                    <th className="py-3 px-4 rounded-l-lg font-normal">NO</th>
                    <th className="py-3 px-4 font-normal">AMOUNT</th>
                    <th className="py-3 px-4 font-normal">STATUS</th>
                    <th className="py-3 px-4 rounded-r-lg font-normal">DATE</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {initialData.map((item) => (
                    <tr key={item.id} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4">{item.id}</td>
                      <td className="py-3 px-4">#{item.amount}</td>
                      <td className="py-3 px-4">
                        <span className="bg-[#a5e8e3] text-[#2b7a78] px-3 py-1 rounded-md text-xs font-bold capitalize">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-[#7b7dd4] rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg mb-4">Success Widrow</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#9a9ce6] text-white/80 text-sm">
                  <th className="py-3 px-4 rounded-l-lg font-normal">NO</th>
                  <th className="py-3 px-4 font-normal">AMOUNT</th>
                  <th className="py-3 px-4 font-normal">STATUS</th>
                  <th className="py-3 px-4 rounded-r-lg font-normal">DATE</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {initialData.map((item) => (
                  <tr key={`success-${item.id}`} className="border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">{item.id}</td>
                    <td className="py-3 px-4">#{item.amount}</td>
                    <td className="py-3 px-4">
                      <span className="bg-[#a5e8e3] text-[#2b7a78] px-3 py-1 rounded-md text-xs font-bold capitalize">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    )
}

export default Payments