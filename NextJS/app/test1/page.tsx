"use client";
import AutoDelete from "./AutoDelete";
const Test1 = () => {
  const handleClick = (path: string) => {
    window.open(path, "_self");
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <div className="w-[90%] md:w-[80%] lg:w-[50%] flex justify-between items-center gap-2">
        <div
          className="cursor-default rounded-md px-4 py-2 text-sm font-medium border border-[#029bcf] text-[#f8f8f8]"
          onClick={() => handleClick("/test1")}
        >
          1. Auto Delete Todo List
        </div>
        <button
          className="py-1 px-3 rounded ring-1 ring-[#029bcf]"
          onClick={() => handleClick("/")}
        >
          Home
        </button>
      </div>
      <div className="w-[90%] mt-5 flex items-center justify-center  ">
        <AutoDelete />
      </div>
    </div>
  );
};

export default Test1;
