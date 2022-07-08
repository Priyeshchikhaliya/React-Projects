import React, { useEffect, useRef } from "react";

const arr = ["Name", "Email", "Password", "Confirm Password"];
export default function App() {
  const refs = useRef(arr.map(() => React.createRef()));

  useEffect(() => {
    refs.current[0].current.focus();
    console.log(refs.current[0].current);
  }, []);

  return (
    <div className="form-container">
      <form className="form">
        {arr.map((el, i) => (
          <p key={i}>
            <input
              name={`box${i}`}
              className="form--input"
              ref={refs.current[i]}
              placeholder={el}
            />
          </p>
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
