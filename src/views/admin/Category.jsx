import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from "../Pagination";
import { RiImageAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  category_add,
  category_get,
  messageClear,
} from "../../store/Reducers/categoryReducers";
import { loaderCssOverride } from "../utils/utils";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import SearchComponent from "./../Components/SearchComponent";

const Category = () => {
  const { loader, successMessage, errorMessage, categoris } = useSelector(
    (state) => state.category,
  );

  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  const [showImage, setShowImage] = useState();
  const [state, setState] = useState({
    name: "",
    image: "",
  });

  const handelImageChange = (e) => {
    const files = e.target.files;

    if (files.length > 0) {
      setShowImage(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
    console.log(showImage);
  };

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      category_add({
        name: state.name,
        image: state.image,
      }),
    );
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      setState({
        name: "",
        image: "",
      });
      setShowImage("");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);
  dispatch(category_get);

  useEffect(() => {
    const obj = {
      parPage: parseInt(parPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(category_get(obj));
  }, [currentPage, searchValue, parPage]);

  return (
    <div className="w-full">
      <div className="bg-[#6a5fdf] border-b-4 border-b-zinc-600 lg:hidden px-4 mb-5 flex justify-between items-center py-4 rounded-sm">
        <span className="text-white">Category</span>
        <button
          onClick={() => setShow(true)}
          className="cursor-pointer px-8 text-white text-sm rounded-sm py-2 bg-red-500"
        >
          Add
        </button>
      </div>
      <div className="flex-wrap w-full flex ">
        <div className="w-7/12">
          <div className="w-full bg-[#6a5fdf] p-2 rounded-md">
            <SearchComponent
              setParPage={setParPage}
              setSearchValue={setSearchValue}
              searchValue={searchValue}
            />
            {/* Header row */}
            <div className="flex text-sm text-[#d0d2d6] font-medium border-b border-zinc-600 px-4">
              <div className="w-1/4 py-3 whitespace-nowrap">NO</div>
              <div className="w-1/4 py-3 whitespace-nowrap">IMAGE</div>
              <div className="w-1/4 py-3 whitespace-nowrap">NAME</div>
              <div className="w-1/4 py-3 whitespace-nowrap">ACTION</div>
            </div>
            {loader ? (
                <PropagateLoader cssOverride={loaderCssOverride} />
            ) : (
              categoris.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center text-sm text-[#d0d2d6] px-4 py-2 hover:bg-[#7a70e6]/40"
                >
                  <div className="w-1/4 whitespace-nowrap">{i + 1}</div>
                  <div className="w-1/4 whitespace-nowrap">
                    <img
                      className="w-12 h-12 object-cover rounded"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="w-1/4 whitespace-nowrap">{item.name}</div>
                  <div className="w-1/4 whitespace-nowrap">
                    <div className="flex gap-3">
                      <button className="bg-yellow-700 p-1 rounded-md cursor-pointer">
                        <FaEdit />
                      </button>
                      <button className="bg-red-700 p-1 rounded-md cursor-pointer">
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div className="flex justify-end pr-5 pt-8">
              <Pagination
                pageNumber={currentPage}
                setPageNumber={setCurrentPage}
                totalItem={categoris.length + 1}
                parPage={parPage}
                showItem={3}
              />
            </div>
          </div>
        </div>

        <form
          onSubmit={handelSubmit}
          className={`${show ? "right-0 " : "-right-80"} transition-all translate-x-0 lg:right-0  w-80 lg:relative  h-screen lg:h-full fixed z-20 top-0  lg:w-5/12 pl-4`}
        >
          <div className="w-full bg-[#6a5fdf] flex lg:justify-between flex-col p-4 rounded-md h-full">
            <div className="text-md flex items-center justify-center text-zinc-700">
              <span className="text-xl pb-5">Add Category</span>
            </div>

            <div className="flex flex-col gap-2 pb-2">
              <label htmlFor="name">Category Name</label>
              <input
                id="name"
                name="category_name"
                value={state.name}
                onChange={(e) => setState({ ...state, name: e.target.value })}
                type="text"
                className="border-2 border-slate-400 text-white rounded-md px-2 py-1 outline-0 "
                placeholder="Category...."
              />
            </div>
            <div className="">
              <label
                htmlFor="image"
                className="w-full 
              hover:border-red-200 transition-all hover:border-dashed 
            border flex items-center h-50 flex-col gap-2 text-white cursor-pointer justify-center border-slate-400 rounded-md"
              >
                {showImage ? (
                  <img
                    className="w-full h-full object-contain"
                    src={showImage}
                  />
                ) : (
                  <>
                    <span>
                      <RiImageAddFill />
                    </span>
                    <span>select image</span>
                  </>
                )}
              </label>
              <input
                onChange={(e) => handelImageChange(e)}
                className="hidden"
                type="file"
                name="image"
                id="image"
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="w-full bg-slate-800 text-white mt-3 py-3 transition-all mb-3 px-2 rounded-md cursor-pointer hover:shadow-blue-300 hover:shadow-lg "
            >
              {loader ? (
                <PropagateLoader cssOverride={loaderCssOverride} />
              ) : (
                "Add Category"
              )}
            </button>
          </div>
        </form>
      </div>
      <div
        onClick={() => setShow(false)}
        className={`${show ? "block" : "hidden"} cursor-pointer w-full h-full bg-black/50 top-0 right-0 fixed z-10`}
      ></div>
    </div>
  );
};

export default Category;
