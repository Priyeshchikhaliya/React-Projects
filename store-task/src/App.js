import React from "react";
import Data from "./itemList";
import "./index.css";
import Render from "./Render";
import Header from "./Header";
import Catheader from "./Catheader";

export default function App() {
  const [checked, setChecked] = React.useState(false);
  const [data, setData] = React.useState(Data);
  const rows = [];
  let lastCategory = null;
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current.focus();
  }, []);

  function stockToggle() {
    setChecked((preVal) => !preVal);
  }

  const handleSearch = (e) => {
    // eslint-disable-next-line array-callback-return
    const finaldata = Data.filter((row) => {
      if (e.target.value === "") {
        return row;
      } else if (
        row.name.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return row;
      }
    });

    if (finaldata) {
      setData(finaldata);
    } else {
      setData(Data);
    }
  };

  data
    .filter((Cont) => {
      return checked ? Cont.stocked : Cont;
    })
    .forEach((item, index) => {
      console.log(lastCategory);
      rows.push(<Header index={index} />);
      if (item.category !== lastCategory) {
        rows.push(<Catheader data={item.category} key={item.category} />);
      }
      rows.push(
        <>
          <Render data={item} />
        </>
      );
      lastCategory = item.category;
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        ref={ref}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="label-toggle">
        <input
          id="toggle"
          type="checkbox"
          name="toggle"
          onChange={stockToggle}
          checked={checked}
        />
        <label for="toggle" className="label-toggle-text">
          Only show products in stock.
        </label>
      </div>
      <tbody> {rows}</tbody>
    </div>
  );
}
