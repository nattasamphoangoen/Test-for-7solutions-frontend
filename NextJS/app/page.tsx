"use client";

export default function Home() {
  const handleClick = (path: string) => {
    window.open(path, "_self");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-8 font-[family-name:var(--font-geist-sans)] mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-5">
          <h4 className="text-2xl font-bold justify-center items-center">
            Home
          </h4>
        </div>
        <div className="flex flex-col gap-5 mt-9 items-center justify-center">
          <button
            className="py-1 px-3 rounded ring-1 ring-[#029bcf] "
            onClick={() => handleClick("/test1")}
          >
            1. Auto Delete Todo List
          </button>
          <button
            className="py-1 px-3 rounded ring-1 ring-[#029bcf] "
            onClick={() => handleClick("/test2")}
          >
            2. Create data from API (OPTIONAL)
          </button>
        </div>
      </div>
    </div>
  );
}
