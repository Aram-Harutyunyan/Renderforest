import React from "react";

const Row = ({ checkrow, item, index }) => {
  console.log("Row");

  return (
    <div className="item">
      <span>{++index}</span>{" "}
      <input
        type="text"
        className="text"
        onChange={(e) => {
          checkrow(item, e.target.value, index);
        }}
      />
    </div>
  );
};
export default Row;
