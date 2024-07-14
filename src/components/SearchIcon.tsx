import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchIcon = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleIconClick = () => {
    setIsInputVisible(!isInputVisible);
  };
  return (
    <div className="flex items-center space-x-2">
      <AiOutlineSearch
        onClick={handleIconClick}
        className=" text-xl cursor-pointer"
      />
      {isInputVisible && (
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
        />
      )}
    </div>
  );
};

export default SearchIcon;
