import React from "react";

export default function App2() {
  const inputEl = React.useRef([]);
  React.useEffect(() => {
    inputEl.current[0].focus();
  });

  const arr = new Array(4).fill(0);
  return (
    <div className="form-container">
      <form className="form">
        {arr.map((n, i) => (
          <input
            className="form--input"
            // key={i}
            type="text"
            placeholder={`Field ${i}`}
            ref={(ref) => inputEl.current.push(ref)}
          />
        ))}
        <div className="form--marketing">
          <input id="okayToEmail" type="checkbox" name="joinedNewsletter" />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
