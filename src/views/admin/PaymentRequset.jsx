
import { forwardRef } from 'react';
import { List } from 'react-window';



const PaymentRequset = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function handelOnWheel({ deltaY }) {
    console.log("delta Y ===>", deltaY);

  }

  const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handelOnWheel} {...props}></div>
  ))


  const Row = ({ index, style }) => {
    return (
      <div className="flex pl-4 text-sm  *:text-[10px] *:font-bold" style={style}>
        <div className="w-[25%] whitespace-nowrap p-2">{index + 1}</div>
        <div className="w-[22%] whitespace-nowrap ">$2000</div>
        <div className="w-[22%] whitespace-nowrap ">
          <span className='py-1 px-3 bg-slate-700 text-xs text-blue-500 rounded-md'>Pending</span>
        </div>
        <div className="w-[25%] whitespace-nowrap ">25 Des 2026</div>
        <div className="w-[25%] whitespace-nowrap ">
          <button className='bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-1 cursor-pointer text-xs text-white  rounded-sm'>Confirm</button>
        </div>
      </div>
    )
  }



  return (
    <div className="bg-[#6a5fdf]  px-4 py-2 rounded-sm">
      <div className="flex flex-col gap-5">

        <div className="">
          <span className="text-md  font-bold text-[#d0d2d6]">Withdrawal Request</span>

        </div>
        <div className="w-full bg-[#a7a3de] overflow-x-auto  h-10 rounded-md">
          <div className="flex px-3 justify-center uppercase items-center min-w-85 pt-2.5 *:font-bold text-sm">
            <div className="w-[25%] text-xs">No</div>
            <div className="w-[25%] text-xs">AMOUNT</div>
            <div className="w-[25%] text-xs">STATUS</div>
            <div className="w-[25%] text-xs">DATE</div>
            <div className="w-[25%] text-xs">ACTION</div>
          </div>
         
        </div>
        <div className="text-[#d0d2d6]">
           {
            <List
            style={{ minWidth: '340px', height: 350 }}
              className="List"
              height={350}
              rowComponent={Row}
              rowCount={10}
              rowHeight={35}
              outerElementType={outerElementType}
            
            />
          }
        </div>
      </div>
    </div>
  )
}

export default PaymentRequset