
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";


export default function Pagination({ pageNumber, setPageNumber, totalItem, parPage, showItem }) {
    let totalPage = Math.ceil(totalItem / parPage)
    let startPage = pageNumber


    let dif = totalPage - pageNumber

    if (dif <= showItem) {
        startPage = totalPage - showItem
    }

    let endPage = startPage < 0 ? showItem : showItem + startPage

    if (startPage <= 0) {
        startPage = 1
    }

    const btn = []



    const createButton = () => {
        for (let i = startPage; i < endPage; i++) {
            btn.push(
                <li key={i++} onClick={() => setPageNumber(i)} className={`${pageNumber === i ? "bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white" : "bg-slate-100 hover:bg-indigo-400 hover:text-white text-[#d0d2d6] hover:shadow-indigo-500/50 shadow-lg bg-zinc-700 "} transition-all w-7 h-7 rounded-full flex justify-center items-center cursor-pointer text-xs`}>
                    {i}
                </li>
            )

        }

        return btn
    }




    return (
        <ul className="flex gap-2">
            {pageNumber > 1 && <li onClick={() => setPageNumber(pageNumber - 1)} className="w-7 h-7 bg-zinc-900 cursor-pointer rounded-full flex justify-center items-center text-[#d0d2d6]">
                <FaArrowLeft />


            </li>}
            {
                createButton()
            }
             {pageNumber < totalPage && <li onClick={() => setPageNumber(pageNumber + 1)} className="w-7 h-7 bg-zinc-900 cursor-pointer rounded-full flex justify-center items-center text-[#d0d2d6]">
                <FaArrowRight />

            </li>} 

        </ul>
    )
}
