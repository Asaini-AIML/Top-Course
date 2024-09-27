import React from 'react';

const Filter = ({ filterData, category, setCategory }) => {
  const filterHandler = (title) => {
    setCategory(title);
  };

  return (
    <div className="w-11/12 mx-auto flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 justify-center">
      {filterData.map((data) => (
        <button
          key={data.id}
          className={`
            text-lg px-4 py-2 rounded-md border-2 transition-all duration-300 font-medium
            ${category === data.title ? "bg-bgDark text-[#ffffff] border-[#ffffff]" : "bg-bgDark2 text-black border-t"}
            hover:bg-opacity-70 hover:bg-black hover:text-white
          `}
          onClick={() => filterHandler(data.title)}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
