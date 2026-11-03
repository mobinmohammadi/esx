const SearchComponent = ({ setParPage, setSearchValue, searchValue }) => {
  return (
      <div className="p-2 w-full rounded-md flex items-center justify-between">
        <div className="border border-emerald-900 py-2  rounded-sm text-white">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-6  text-zinc-900  cursor-pointer outline-0"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
        <div className="bg-[#283046] py-2 px-3 rounded-sm text-sm">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            className="outline-0 text-[#d0d2d6] bg-transparent border-none"
            placeholder="Please Search...."
          />
        </div>
      </div>
  );
};

export default SearchComponent;
