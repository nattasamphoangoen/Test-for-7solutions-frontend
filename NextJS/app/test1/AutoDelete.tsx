"use client";

import { useState, useRef, useEffect } from "react";
import DataListType from "./index";
import datalist from "./dataList";

const AutoDelete = () => {
  const [dataList, setDataList] = useState<DataListType[]>(datalist);
  const [fruitList, setFruitList] = useState<DataListType[]>([]);
  const [vegetableList, setVegetableList] = useState<DataListType[]>([]);

  const timersRef = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    const currentTimers = timersRef.current;
    return () => {
      Object.values(currentTimers).forEach((timerId) => {
        window.clearTimeout(timerId);
      });
    };
  }, []);

  const handleMoveToColumn = (item: DataListType, index: number) => {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);

    if (timersRef.current[item.name]) {
      window.clearTimeout(timersRef.current[item.name]);
    }

    if (item.type === "Fruit") {
      setFruitList((prev) => [...prev, item]);
      autoMoveBack(item, setFruitList);
    } else if (item.type === "Vegetable") {
      setVegetableList((prev) => [...prev, item]);
      autoMoveBack(item, setVegetableList);
    }
  };

  const autoMoveBack = (
    item: DataListType,
    setColumn: React.Dispatch<React.SetStateAction<DataListType[]>>
  ) => {
    const timerId = window.setTimeout(() => {
      setColumn((prev) => prev.filter((data) => data !== item));
      setDataList((prev) => {
        if (!prev.find((data) => data === item)) {
          return [...prev, item];
        }
        return prev;
      });
      delete timersRef.current[item.name];
    }, 5000);
    timersRef.current[item.name] = timerId;
  };

  const handleMoveBackToMain = (
    item: DataListType,
    setColumn: React.Dispatch<React.SetStateAction<DataListType[]>>
  ) => {
    if (timersRef.current[item.name]) {
      window.clearTimeout(timersRef.current[item.name]);
      delete timersRef.current[item.name];
    }

    setColumn((prev) => prev.filter((data) => data !== item));
    setDataList((prev) => {
      if (!prev.find((data) => data === item)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  return (
    <div className="flex flex-wrap flex-row gap-[5px] md:gap-[15px] justify-center">
      <div>
        {dataList.map((data, index) => {
          return (
            <div key={index}>
              <button
                className="m-[5px] p-[10px] rounded-[10px] border border-[#029bcf] cursor-pointer w-[90px] md:w-[150px] text-[12px] md:text-[15px]"
                onClick={() => handleMoveToColumn(data, index)}
              >
                {data.name}
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center p-4 border border-[#fffff] rounded-[10px] h-[600px] w-[100px] md:w-[200px]">
        <h3 style={{ margin: "0", padding: "0" }}>Fruit</h3>
        <hr style={{ margin: "0 0 10px 0", padding: "0", width: "100%" }} />
        {fruitList.map((data, index) => (
          <button
            key={index}
            className="m-[5px] p-[10px] rounded-[10px] border border-[#029bcf] cursor-pointer w-[90px] md:w-[150px] text-[12px] md:text-[15px]"
            onClick={() => handleMoveBackToMain(data, setFruitList)}
          >
            {data.name}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center p-4 border border-[#fffff] rounded-[10px] h-[600px] w-[100px] md:w-[200px]">
        <h3 style={{ margin: "0", padding: "0" }}>Vegetable</h3>
        <hr style={{ margin: "0 0 10px 0", padding: "0", width: "100%" }} />
        {vegetableList.map((data, index) => (
          <button
            key={index}
            className="m-[5px] p-[10px] rounded-[10px] border border-[#029bcf] cursor-pointer w-[90px] md:w-[150px] text-[12px] md:text-[15px]"
            onClick={() => handleMoveBackToMain(data, setVegetableList)}
          >
            {data.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AutoDelete;
