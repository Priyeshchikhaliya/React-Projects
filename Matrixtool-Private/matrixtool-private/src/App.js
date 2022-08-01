import React, { useState } from "react";
import "./index.css";
const App = () => {
  const [time, setTime] = useState({
    hrs: 8,
    min: null,
    break: null,
  });
  const [showtime, setshowTime] = useState({
    hrs: 0,
    min: 0,
    break: 0,
  });
  // const [timeleft, settimeLeft] = useState({
  //   tlhr: 0,
  //   tlmin: 0,
  // });

  function onchange(e) {
    const { name, value } = e.target;
    setTime((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }
  React.useEffect(() => {
    let temp = (Number(time.min) + Number(time.break)).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    let temphr = ((Number(time.hrs) * 60 + 600) / 60 - 12).toLocaleString(
      "en-US",
      {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }
    );

    temp >= 60
      ? setshowTime((pre) => ({
          ...pre,
          hrs: temphr++,
          min: temp - 60,
          show: true,
        }))
      : setshowTime((pre) => ({
          ...pre,
          hrs: temphr,
          min: temp,
          show: true,
        }));
  }, [time.break, time.hrs, time.min]);
  console.log(time.min);
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="title">Arrival Time</h1>
        <div className="container-fluid">
          <input
            multiple
            name="hrs"
            type="text"
            value={time.hrs}
            className="hrs"
            onChange={onchange}
            placeholder="Hours"
            maxLength="2"
          />
          <b>:</b>
          <input
            name="min"
            type="text"
            maxLength="2"
            value={time.min}
            className="min"
            onChange={onchange}
            placeholder="Minutes"
          />
          <h1>
            <span>AM</span>
          </h1>
        </div>

        <br />
        <h1 htmlFor="break">Extra Break Time</h1>
        <input
          name="break"
          type="text"
          maxLength="2"
          value={time.break}
          className="break"
          onChange={onchange}
          placeholder="Minutes"
        />
        {
          <>
            <h1 className="leave">You Can Leave After</h1>
            <h1 className="leave">
              {showtime.hrs} :{" "}
              {showtime.min.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}{" "}
              <span>PM</span>{" "}
            </h1>
          </>
        }
      </div>
    </div>
  );
};
export default App;
