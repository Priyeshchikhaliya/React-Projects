import React from "react";
import Data from "./itemList";
import "./index.css";
import Render from "./Categories";
import Header from "./Header";
import Catheader from "./TableHead";

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

  const FinalData = data
    .filter((Cont) => {
      return checked ? Cont.stocked : Cont;
    })
    // .filter((Cont) => {
    //   return Cont.category === "Sporting Goods" ? Cont : Cont;
    // })
    .map((item, index) => {
      return (
        <>
          {" "}
          <Header index={index} />
          <Catheader data={item.category} />
          <Render data={item} />
        </>
      );
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

      {FinalData}
    </div>
  );
}
