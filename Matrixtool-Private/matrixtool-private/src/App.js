import React, { useState, useEffect } from "react";
import "./index.css";
const App = () => {
  const [time, setTime] = useState({
    hrs: null,
    min: null,
    break: null,
  });
  const [show, setShow] = useState(false);
  function onchange(e) {
    const { name, value } = e.target;
    setTime((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function onclick() {
    setShow(true);

    let temp = Number(time.min) + Number(time.break);
    let temphr = (Number(time.hrs)*60+600)/60-12
    temp >= 60
      ? setTime((pre) => ({
          ...pre,
          hrs: temphr,
          min: temp - 60,
        }))
      : setTime((pre) => ({
          ...pre,
          hrs: temphr, 
          min: temp,
        }));
  }

  return (
    <div>
      <div>
        <input
          name="hrs"
          type="text"
          value={time.hrs}
          className="hrs"
          onChange={onchange}
          placeholder="Hrs"
        />
        :
        <input
          name="min"
          type="text"
          maxLength="2"
          value={time.min}
          className="min"
          onChange={onchange}
          placeholder="Min."
        />{" "}
        <br />
        <label htmlFor="break">Break Taken</label>
        <input
          name="break"
          type="text"
          maxLength="2"
          value={time.break}
          id="extra"
          onChange={onchange}
          placeholder="Min."
        />
        {
          <>
            {show && (
              <h1>
                {time.hrs} : {time.min} <span>PM</span>{" "}
              </h1>
            )}
          </>
        }
        <button onClick={onclick}>Calculate</button>
      </div>
    </div>
  );
};
export default App;
