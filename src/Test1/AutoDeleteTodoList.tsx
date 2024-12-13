import React, { useState } from "react";
import DataListType from "./index";
import datalist from "./dataList";

const buttonStyle: React.CSSProperties = {
  margin: "5px",
  padding: "10px 10px",
  borderRadius: "10px",
  border: "1px solid #029bcf",
  cursor: "pointer",
  width: window.innerWidth < 600 ? "90px" : "150px",
  fontSize: window.innerWidth < 600 ? "12px" : "15px",
};

const columnStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1rem",
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: window.innerWidth < 600 ? "100px" : "200px",
  height: "600px",
};

const AutoDeleteTodoList: React.FC = () => {
  const [dataList, setDataList] = useState<DataListType[]>(datalist);
  const [fruitList, setFruitList] = useState<DataListType[]>([]);
  const [vegetableList, setVegetableList] = useState<DataListType[]>([]);

  const handleMoveToColumn = (item: DataListType, index: number) => {
    const updatedDataList = [...dataList];
    updatedDataList.splice(index, 1);
    setDataList(updatedDataList);

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
    setTimeout(() => {
      setColumn((prev) => prev.filter((data) => data !== item));
      setDataList((prev) => {
        if (!prev.find((data) => data === item)) {
          return [...prev, item];
        }
        return prev;
      });
    }, 5000);
  };

  const handleMoveBackToMain = (
    item: DataListType,
    setColumn: React.Dispatch<React.SetStateAction<DataListType[]>>
  ) => {
    setColumn((prev) => {
      const updatedList = prev.filter((data) => data !== item);
      return updatedList;
    });
    setDataList((prev) => {
      if (!prev.find((data) => data === item)) {
        return [...prev, item];
      }
      return prev;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        gap: window.innerWidth < 600 ? "5px" : "15px",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      <div>
        {dataList.map((data, index) => {
          return (
            <div key={index}>
              <button
                style={buttonStyle}
                onClick={() => handleMoveToColumn(data, index)}
              >
                {data.name}
              </button>
            </div>
          );
        })}
      </div>

      <div style={{ ...columnStyle }}>
        <h3 style={{ margin: "0", padding: "0" }}>Fruit</h3>
        <hr style={{ margin: "0 0 10px 0", padding: "0", width: "100%" }} />
        {fruitList.map((data, index) => (
          <button
            key={index}
            style={buttonStyle}
            onClick={() => handleMoveBackToMain(data, setFruitList)}
          >
            {data.name}
          </button>
        ))}
      </div>

      <div style={{ ...columnStyle }}>
        <h3 style={{ margin: "0", padding: "0" }}>Vegetable</h3>
        <hr style={{ margin: "0 0 10px 0", padding: "0", width: "100%" }} />
        {vegetableList.map((data, index) => (
          <button
            key={index}
            style={buttonStyle}
            onClick={() => handleMoveBackToMain(data, setVegetableList)}
          >
            {data.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AutoDeleteTodoList;
