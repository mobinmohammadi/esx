import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import SearchComponent from "../Components/SearchComponent";
import { useDispatch } from "react-redux";
import { get_sellers } from "../../store/Reducers/sellerReducers";

const Sellers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(5);
  const [pegeNumber, setPageNumber] = useState("");
  const [parPage, setParPage] = useState(5);

  const dispatch = useDispatch();

  useEffect(() => {
    const obj = {
      parPage: parseInt(parPage),
      page: parseInt(currentPage),
      searchValue,
    }
    dispatch(get_sellers(obj))
  } , [parPage ,currentPage , searchValue]);

  return (
    <div>
      <span>Sellers</span>
      <div className="px-4 py-4 rounded-md flex bg-[#6a5fdf] items-center justify-between">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex  justify-between items-center">
            <SearchComponent
              setParPage={setParPage}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
          </div>

          <table className="w-full text-left ">
            <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700 ">
              <tr>
                <th scope="col" className="py-3 px-4">
                  NO
                </th>
                <th scope="col" className="py-3 px-4">
                  IMAGE
                </th>
                <th scope="col" className="py-3 px-4">
                  NAME
                </th>
                <th scope="col" className="py-3 px-4">
                  SHAOPE NAME{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  PAYMENT STATUS{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  {" "}
                  EMAIL
                </th>
                <th scope="col" className="py-3 px-4">
                  {" "}
                  DIVISION
                </th>
                <th scope="col" className="py-3 px-4">
                  DISTRICT{" "}
                </th>
                <th scope="col" className="py-3 px-4">
                  ACTION{" "}
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {[1, 2, 3, 4, 5].map((item, i) => (
                <tr key={i}>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    {i}
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    <img
                      className="w-10 h-10"
                      src={`http://localhost:5173/images/category/${item}.jpg`}
                      alt=""
                    />
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Mobin Mohammadi
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Easy
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Mobin@gmail.com
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Urmie
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    Uttara
                  </td>
                  <td
                    scope="row"
                    className="px-4 py-3 font-medium whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center rounded-md bg-green-600 text-xl p-2 hover:bg-green-900 cursor-pointer transition-all duration-100">
                      <FaEye />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
