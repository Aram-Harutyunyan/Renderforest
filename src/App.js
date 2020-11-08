import React, { useEffect, useMemo, useState } from "react";
import Row from "./components/Row";
import "./App.scss";
import { v4 as uuidv4 } from "uuid";
import { PROS, CONS } from "./constants";

const App = () => {
  const [pros, setPros] = useState([{ id: uuidv4(), value: "", type: PROS }]);
  const [cons, setCons] = useState([{ id: uuidv4(), value: "", type: CONS }]);

  const checkRow = (item, inputValue, index) => {
    if (item.type === PROS && index === pros.length) {
      setPros([
        ...pros,
        {
          id: uuidv4(),
          value: inputValue,
          type: item.type,
        },
      ]);
    } else if (item.type === CONS && index === cons.length) {
      setCons([
        ...cons,
        {
          id: uuidv4(),
          value: inputValue,
          type: item.type,
        },
      ]);
    } else if (!inputValue) {
      if (item.type === PROS) {
        setPros(pros.filter((el) => el.id !== item.id));
      } else {
        setCons(cons.filter((el) => el.id !== item.id));
      }
    }
  };
  const memoPros = useMemo(
    () =>
      pros.map(
        (item, index) =>
          item.type === PROS && (
            <Row key={item.id} index={index} item={item} checkrow={checkRow} />
          )
      ),
    [pros, checkRow]
  );
  const memoCons = useMemo(
    () =>
      cons.map(
        (item, index) =>
          item.type === CONS && (
            <Row key={item.id} index={index} item={item} checkrow={checkRow} />
          )
      ),
    [cons, checkRow]
  );
  return (
    <div className="App">
      <header className="mcDonalds">Should I eat McDonalds?</header>
      <div className="pros-cons">
        <div className="items">
          <div className="proscons">PROS</div>
          {memoPros}
        </div>
        <div className="items">
          <div className="proscons">CONS</div>
          {memoCons}
        </div>
      </div>
    </div>
  );
};
export default App;
