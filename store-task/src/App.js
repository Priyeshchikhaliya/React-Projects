import React from "react";
import Data from "./itemList";
import "./index.css";
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

  const FinalData = data
    .filter((Cont) => {
      return checked ? Cont.stocked : Cont;
    })
    .map((item, index) => {
      return (
        <table className="table">
          {/* <thead>
            {item.category == "Sporting Goods"
              ? "Sporting Goods"
              : index == 3
              ? "Electronics"
              : ""}
          </thead> */}
          {
            (item.category = "Electronics" ? (
              <tr>
                <td
                  className={item.stocked ? "item-stocked" : "item-outstocked"}
                >
                  {item.name}
                </td>
                <td>{item.price}</td>
              </tr>
            ) : (
              <tr>
                <td
                  className={item.stocked ? "item-stocked" : "item-outstocked"}
                >
                  {item.name}
                </td>
                <td>{item.price}</td>
              </tr>
            ))
          }
        </table>
      );
    });

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
      <div className="table-title">
        {" "}
        <h2>Name</h2>
        <h2>Price</h2>
      </div>
      <div className="Container">{FinalData}</div>
    </div>
  );
}
