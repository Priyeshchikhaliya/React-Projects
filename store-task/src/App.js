import React from "react";
import Data from "./itemList";
import "./index.css";
import Render from "./Render";

export default function App() {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = React.useState(Data);

  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.focus();
  }, []);

  function stockToggle() {
    setChecked((preVal) => !preVal);
  }

  const handleSearch = (e) => {
    const finaldata = Data.filter((row) => {
      if (e.target.value == "") {
        return row;
      } else if (row.name.toLowerCase().includes(e.target.value)) {
        return row;
      }
    });

    if (finaldata) {
      setData(finaldata);
    } else {
      setData(Data);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        ref={ref}
        onChange={handleSearch}
      />
      <div className="label-toggle">
        <input
          id="toggle"
          type="checkbox"
          name="toggle"
          onChange={stockToggle}
          checked={checked}
        />
        <h3 className="label-toggle-text">Only show products in stock.</h3>
      </div>
      <h3>Sporting Goods</h3>
      <Render
        checked={checked}
        data={data.filter((item) => {
          return item.category == "Sporting Goods";
        })}
      />
      <h3>Electronics</h3>
      <Render
        checked={checked}
        data={data.filter((item) => {
          return item.category == "Electronics";
        })}
      />
    </div>
  );
}
